var socket = io();


function loginDummy(){
	myUser = { "username": "firstName", "password": "firstPassword" }
	socket.emit('log in', myUser)

}

function CreateDummy(){
	myUser = { "username": "newUser1", "password": "firstPassword" }
	socket.emit('checkAndAddUsername', myUser)

}

socket.on("Successful Authentication", (msg) => {
	console.log("Successfully Authenticated: " + msg);
});

socket.on("Failed Authentication", (msg) => {
	console.log("Failed to Authenticate: " + msg);
});

socket.on("No User", (msg) => {
	console.log("User not found: " + msg);
});

socket.on("User Already Exists", (msg) => {
	console.log("User Already exists: " + msg);
});

socket.on("Successful Creation", (msg) => {
	console.log("User Successfully Created: " + msg);
});