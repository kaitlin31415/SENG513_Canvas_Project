var MongoClient = require('mongodb').MongoClient;
const URI = "mongodb+srv://kaitlin_seng513:PASSWORD@cluster0.2idwj.mongodb.net/";
const bcrypt = require('bcryptjs');

//https://stackoverflow.com/questions/36513175/accessing-mongodb-outside-of-connection-callback


//User Registration
async function createNewUser(username, password, url) {
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
						console.log("1 User Successfully inserted");
						db.close();
					});
				});
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

io.on('connection', (socket) => {
	console.log('user ' + socket.id + ' connected');

	socket.on('log in', (user_info) => {
		/**
		 * Assume user_info is a dictionary containing the username and password (unhashed)
		 * 
		 */
		let foundUser = (result) =>{
			if(result){
				socket.emit("Successful Authentication", user_info.username);
				//Add the username and socket id to current user list
				current_users[user_info.username] = {
					"socket_id": socket.id,
					"colour": "#FF00FF"
				}
			}else{
				socket.emit("Failed Authentication", user_info.username);
			}
		}
		let noUser = () => {
			socket.emit("No User", user_info.username);
		}
		authenticate(user_info, URI, foundUser, noUser)

	});


	socket.on('chat message', (msg) => {
	});

	socket.on('disconnect', () => {

	});

	socket.on('checkAndAddUsername', (items) => {
	});
});