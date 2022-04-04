var MongoClient = require('mongodb').MongoClient;
const URI = "mongodb+srv://kaitlin_seng513:seng513_database@cluster0.2idwj.mongodb.net/";
const bcrypt = require('bcryptjs');

//https://stackoverflow.com/questions/36513175/accessing-mongodb-outside-of-connection-callback

class Canvas {
	constructor(id) {
		this.id = id;
		this.sticknotes = [];
		this.drawings = [];
		this.users = [];
	}
	constructor(id, canvasInfo) {
		this.id = id;
		this.sticknotes = canvasInfo.sticknotes;
		this.drawings = canvasInfo.drawings;
		this.users = canvasInfo.users;
	}
	addDrawing(drawingJson) {
		this.drawings.push(drawingJson);
	}
	addSticky(stickyJson) {
		this.sticknotes.push(stickyJson);
	}
	addUser(user) {
		if (!(user in this.users)) {
			this.users.push(user);
		}
	}
	objForDatabase() {
		return {
			drawings: this.drawings,
			stickies: this.sticknotes,
			users: this.users
		}
	}
	objForClient() {
		return {
			drawings: this.drawings,
			stickies: this.sticknotes,
		}
	}
}

class Drawing {
	constructor(x0, y0, x1, y1, colour, thickness, canvas) {
		this.x0 = x0;
		this.y0 = y0;
		this.x1 = x1;
		this.y1 = y1;
		this.colour = colour;
		this.thickness = thickness;
		this.canvasId = canvas;
	}
	drawing() {
		return {
			'x0': this.x0,
			'y0': this.y0,
			'x1': this.x1,
			'y1': this.y1,
			'colour': this.colour,
			'thickness': this.thickness,
			'canvasId': this.canvasId
		}
	}
}


//User Registration
async function createNewUser({ username, password }, url, success_callback, user_already_exists_callback) {
	// Hash the Password
	password = bcrypt.hashSync(password, 10);

	MongoClient.connect(url, function (err, db) {

		if (err) throw err;
		var dbo = db.db("Users");
		var myobj = { userName: username, password: password };
		dbo.collection("user_authentication").find({ userName: username }, { projection: { _id: 0, userName: 1 } }).toArray(function (err, result) {
			if (err) throw err;
			db.close();

			//if it doesn't already exist 
			if (result.length == 0) {
				MongoClient.connect(url, function (err, db) {
					if (err) throw err;
					var dbo = db.db("Users");
					dbo.collection("user_authentication").insertOne(myobj, function (err, res) {
						if (err) throw err;
						success_callback();
						db.close();
					});
				});
			} else {
				user_already_exists_callback();
			}
		});

	});
}

//User authentication  
async function authenticate({ username, password }, url, success_callback, no_user_callback) {

	MongoClient.connect(url, function (err, db) {
		if (err) throw err;
		var dbo = db.db("Users");
		dbo.collection("user_authentication").find({ userName: username }, { projection: { _id: 0, password: 1 } }).toArray(function (err, result) {
			if (err) throw err;
			db.close();
			if (result.length == 0) {
				no_user_callback();
			} else {
				result = bcrypt.compareSync(password, result[0].password);
				success_callback(result)
			}
		});
	});
}

async function createNewCanvas({ canvasId }, url, success_callback, canvas_already_exists_callback) {
	MongoClient.connect(url, function (err, db) {

		if (err) throw err;
		var dbo = db.db("CanvasInfo");
		var myobj = { canvasId: canvasId };
		dbo.collection("canvasInfoCollection").find({ canvasId: canvasId }, {}).toArray(function (err, result) {
			if (err) throw err;
			db.close();

			//if it doesn't already exist 
			if (result.length == 0) {
				MongoClient.connect(url, function (err, db) {
					if (err) throw err;
					var dbo = db.db("CanvasInfo");
					dbo.collection("canvasInfoCollection").insertOne(myobj, function (err, res) {
						if (err) throw err;
						success_callback();
						db.close();
					});
				});
			} else {
				canvas_already_exists_callback();
			}
		});

	});
}

async function getCanvas({ canvasId }, url, success_callback) {
	MongoClient.connect(url, function (err, db) {

		if (err) throw err;
		var dbo = db.db("CanvasInfo");
		var myobj = { canvasId: canvasId };
		dbo.collection("canvasInfoCollection").find({ canvasId: canvasId }, {}).toArray(function (err, result) {
			if (err) throw err;
			db.close();
			success_callback(result[0]);
		});

	});
}


async function updateCanvas({ canvasId, canvasItems }, url) {
	// Hash the Password
	password = bcrypt.hashSync(password, 10);

	MongoClient.connect(url, function (err, db) {
		if (err) throw err;
		var dbo = db.db("CanvasInfo");
		dbo.collection("canvasInfoCollection").updateOne({ canvasId: canvasId }, { $set: { canvasItems: canvasItems } }, function (err, res) {
			if (err) throw err;
			console.log("1 Canvas updated");
			db.close();
		});
	});
}

// Add canvas to users addedcanvas list


const express = require('express');
const app = express();

const http = require('http');
const server = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(server);

app.use(express.static('../dummyClient'))

server.listen(2222, () => {
	console.log('listening on *:2222');
});

let current_users = {}
let socketsToUsers = {}

let current_canvases = {}

function updateActiveUserList(roomName) {
	//Update the active list to all sockets now in the room 
	const clients = io.sockets.adapter.rooms.get(roomName);
	let updatedClientList = []
	for (const clientId of clients) {
		//this is the socket of each client in the room.
		const clientSocket = io.sockets.sockets.get(clientId);
		updatedClientList.push(socketsToUsers[clientSocket.id]);
	}
	return updatedClientList;
}

io.on('connection', (socket) => {
	console.log('user ' + socket.id + ' connected');

	socket.on('log in', (user_info) => {
		/**
		 * Assume user_info is a dictionary containing the username and password (unhashed)
		 * 
		 */
		let foundUser = (result) => {
			if (result) {
				socket.emit("Successful Authentication", user_info.username);
				//Add the username and socket id to current user list
				current_users[user_info.username] = {
					"socket_id": socket.id,
					"colour": "000000"
				}
				socketsToUsers[socket.id] = user_info.username;

			} else {
				socket.emit("Failed Authentication", user_info.username);
			}
		}
		let noUser = () => {
			socket.emit("No User", user_info.username);
		}
		authenticate(user_info, URI, foundUser, noUser)

	});
	socket.on('Update colour', (colour) => {
		current_users[socketsToUsers[socket_id]]['colour'] = colour;
	});

	socket.on('Open Canvas', (canvas_info) => {
		//Check if canvas is already open
		if (canvas_info.canvasId in current_canvases) {
			socket.emit("Render Canvas", current_canvases[canvas_info.canvasId].objForClient())
			// Add the user to the canvas List 
		} else {

			let createCanvasObject = (result) => {
				// create canvas object and add it to the current list
				current_canvases[canvas_info.canvasId] = new Canvas(result.canvasInfo)
			}

			// Get canvas from database
			getCanvas(canvas_info, URI, createCanvasObject)
		}
		// Add the user to the canvas List 
		current_canvases[canvas_info.canvasId].addUser(socketsToUsers[socket.id]);

		//Update the active list to all sockets now in the room 
		io.to(canvas_info.canvasId).emit('updateActiveUserList', updateActiveUserList(canvas_info.canvasId))

	});

	socket.on('Drawing', (data) => {
		let d = new Drawing(data.x0,
			data.y0,
			data.x1,
			data.y1,
			current_users[socketsToUsers[socket.id]][colour],
			data.thickness,
			data.canvasId
		);
		current_canvases[data.canvasId].addDrawing(d.drawing());


	});


	socket.on('chat message', (data) => {
		io.to(data.canvasId).emit("chat message", data.msg);
	});

	socket.on('disconnect', () => {
		//Take the user out of the active users list and socket id list 
		let name = socketsToUsers[socket.id];
		delete socketsToUsers[socket.id];
		delete current_users[name];

		//Update the user list in all canvas' this user is in
		Object.keys(socket.rooms).forEach(function (room, idx) {
			io.to(room).emit('updateActiveUserList', updateActiveUserList(room))
		});

	});

	socket.on('checkAndAddUsername', (user_info) => {
		let success = () => {
			socket.emit("Successful Creation", user_info.username);
		}
		let fail = () => {
			socket.emit("User Already Exists", user_info.username);
		}
		createNewUser(user_info, URI, success, fail)
	});

	socket.on('createCanvas', (info) => {
		let success = () => {
			socket.emit("Successful Canvas Creation", info.canvasId);
			//Add user to canvas channel
			socket.join(info.canvasId)



			// make an entry in the canvases dictionary with the name
			current_canvases[info.canvasId] = new Canvas(info.canvasId);

		}
		let fail = () => {
			socket.emit("Canvas Already Exists", info.canvasId);
		}
		createNewCanvas(info, URI, success, fail)
	});

	socket.on('leaveCanvas', (info) => {
		//Get the canvas at canvas Id
		let canvas = current_canvases[info.canvas_id].objForDatabase()
		updateCanvas(info.canvas_id, canvas);
		socket.leave(info.canvasId);

		//Update the user list
		io.to(canvas_info.canvasId).emit('updateActiveUserList', updateActiveUserList(info.canvasId))
	});


});