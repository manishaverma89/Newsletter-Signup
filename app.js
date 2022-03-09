const express = require("express");
const request = require("request");   //The request module is used to make HTTP calls. It is the simplest way of making HTTP calls in node. js using this request module

const bodyParser = require("body-parser");
const app = express();






app.listen(3000 , function(){

    console.log("Server started at port 3000");
});