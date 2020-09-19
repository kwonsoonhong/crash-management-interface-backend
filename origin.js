var express = require('express');
var app = express();
var mongoose = require('mongoose');

const PORT = 3000
const DB_HOSTNAME = "[IP address]"
const DB_PORT = "[DB Port]"
const DB_USERNAME = "[DB username]"
const DB_PASSWORD = "[DB pwd]"
const DB_NAME = "[DB Name]"
const DB_COLLECTION = "[DB Collection Name]"


var result = null

app.get('/crashlist', function(req, res){
	console.log(result)	
});

app.get('/crashinfo/'+test_name, function(req, res){
    res.json("test");
});

app.listen(PORT, function(){
 console.log(`Server is running on ${PORT}port`);
});

var test_name = "testcase" + "1"
//var mongoose_conn = mongoose.connect('mongodb://112.187.174.142:27017/'+DB_NAME, function(error){
//	if(error) 
//		console.log(error);
//	console.log("connection successful");
//	var db = mongoose.connection;
//	var collection = mongoose.connection.db.collection(DB_COLLECTION);
//	var result = collection.find({}).toArray()
//	console.log(result)
//});
async function run(){
	mongoose.connect('mongodb://[DB IP address:DB Port]/'+DB_NAME)
	mongoose.connection.on('open', function (ref) {
		console.log('Connected to mongo server.');
		
	}
run()


