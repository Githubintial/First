var express = require('express');
var Cloudant = require('cloudant');
var bodyParser = require('body-parser');//API



var me = 'usha123';
var password = 'kiran@123';
var cloudant = Cloudant({account:me, password:password});
// create a new express server or Bind application-level middleware
// to an instance of the app object by using the app.use() and app.METHOD() functions
var app = express();
//parses the text as json and exposes the resulting object on req.body...
//parse json and urlencoded body this way....
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//get method route in express
app.get('/ecommerce2',function(req,res){
	res.sendFile(__dirname+'/'+'ecommerce2.html');
})

//post method route in express
app.post('/register',function(req,res){
	 //var name = req.body.name;
	 var title = req.body.title;
	 var description = req.body.description;
	 
	 var docId = req.body.docId;
	 var db = cloudant.db.use('apcloud');
	 db.insert({_id : docId, "title":title,"description":description},function(err,data){
		 if(err){
			 return err
		 }
		 console.log(data);
	 res.send("Insertion Successfull");
	 }); 
 }) 
 app.listen('3001');
 console.log('Example app listening on port 3001!');