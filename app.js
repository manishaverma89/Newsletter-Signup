const express = require("express");
const https = require('https') ;      // to make https request

const bodyParser = require("body-parser");

const app = express();                // app is an instance of express
app.use(express.static("public"));    //way to keep all the the static files separate in public folder
app.use(bodyParser.urlencoded({extended:true}));  // use body-parser.urlencoded to get post request from html files


app.get("/", function(req,res){
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req,res){
    var firstName = req.body.fName;
    var lastName = req.body.lName;
    var email = req.body.emailAddress;
    console.log(firstName , lastName, email);
});


app.listen(3000 , function(){

    console.log("Server started at port 3000");
});