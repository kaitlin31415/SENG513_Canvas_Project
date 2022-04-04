var MongoClient = require('mongodb').MongoClient;
const URI = "mongodb+srv://kaitlin_seng513:PASSWORD@cluster0.2idwj.mongodb.net/";
const bcrypt = require('bcryptjs');

//https://stackoverflow.com/questions/36513175/accessing-mongodb-outside-of-connection-callback


//User Registration
export async function createNewUser(username, password, url) {
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
export async function authenticate({ username, password }, url, success_callback, no_user_callback) {

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


//createNewUser("secondName", "secondPassword", URI);
// authenticate(	{ "username": "firstName", "password": "firstPassword" }, 
// 				URI, 
// 				(result) => { 
// 					if (result) { 
// 						console.log("Authenticated Successfully"); 
// 					} else { 
// 						console.log("Authentication Failure - incorrect password") 
// 					} 
// 				}, 
// 				() => { console.log("No user exists") }	
// 			);
// console.log("This Statement: " + goodUser)