const express = require("express");
const https = require('https') ;      // to make https request

const bodyParser = require("body-parser");
const app = express();                // app is an instance of express






app.listen(3000 , function(){

    console.log("Server started at port 3000");
});