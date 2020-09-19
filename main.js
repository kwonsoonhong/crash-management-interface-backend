var express = require('express');
var app = express();
var port = 3000;
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ors = require('cors');

mongoose.connect('mongodb://[IP address:DB Port]/[DB Name]');

var db = mongoose.connection;
db.on('error', function(err) {
	console.log('Error: ', err);
});
db.on('open', function() {
	console.log('Open Event');
});

var structor = new Schema({
	"_id" : Schema.Types.ObjectId,
	"name": String,
	"uuid" : String,
	"crash_target": String,
	"fuzzer": String,
	"crash_input": String,
	"crash_time" : String,
	"crash_taint" : String,
	"crash_cfg" : String
});

structor.set('collection', '[collection name]');

var results = null

// Main
app.all('/*', function(req, res, next) {
	  res.header("Access-Control-Allow-Origin", "*");
	  res.header("Access-Control-Allow-Headers", "X-Requested-With");
	  next();
});

// crash list 
app.get('/crashlist', function(req, res){
	var target = mongoose.model("crash", structor);
	target.find({}, function(err,res2){
		//console.log(res2)
		res.json(res2)
	});
});

// 특정 crash id 검색
app.get('/crashinfo/:id', function(req, res){
	var target = mongoose.model("crash", structor);
	var crash_id = req.params.id;
	target.findOne({uuid: crash_id}, function(err, res2){
		//console.log(res2)
		res.json(res2)
	});
});

app.get('/crashinfo/:target', function(req, res){
	var target = mongoose.model("crash", structor);
	var crash_target = req.params.title;
	target.findOne({uuid: crash_target}, function(err,res2){
		res.json(res2)
	});
});

app.listen(port, function(){
 console.log(`Server is running on ${port}port`);
});

app.use('/download', express.static(__dirname + '/download'));
