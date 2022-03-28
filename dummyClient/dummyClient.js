var socket = io();


function loginDummy(){
	myUser = { "username": "firstName", "password": "firstPassword" }
	socket.emit('log in', myUser)

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