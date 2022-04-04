var socket = io();


function loginDummyU1(){
	myUser = { "username": "firstName", "password": "firstPassword" }
	socket.emit('log in', myUser)

}

function loginDummyU2(){
	myUser = { "username": "secondName", "password": "secondPassword" }
	socket.emit('log in', myUser)

}
function loginDummyU3(){
	myUser = { "username": "newUser1", "password": "firstPassword" }
	socket.emit('log in', myUser)

}

function createCanvas(){
	myCanvas = {canvasId: "theFirstCanvas"};
	socket.emit("createCanvas", myCanvas);

}
function openCanvas(){
	myCanvas = {canvasId: "theFirstCanvas"};
	socket.emit("openCanvas", myCanvas);

}

function leaveCanvas(){
	myCanvas = {canvasId: "theFirstCanvas"};
	socket.emit("leaveCanvas", myCanvas);
}





function CreateDummy(){
	myUser = { "username": "newUser1", "password": "firstPassword" }
	socket.emit('checkAndAddUsername', myUser)

}
socket.on("Successful Canvas Creation", (msg) => {
	console.log("Successfully Created Canvas: " + msg);
});

socket.on("Canvas Already Exists", (msg) => {
	console.log("Canvas Already Exists: " + msg);
});


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

socket.on("updateActiveUserList", (msg) => {
	console.log("Current Users: " + msg);
});