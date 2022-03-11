const express = require("express");
// const request = require("request");
const https = require("https"); // to make https request

const bodyParser = require("body-parser");

const app = express(); // app is an instance of express
app.use(express.static("public")); //way to keep all the the static files separate in public folder
app.use(bodyParser.urlencoded({ extended: true })); // use body-parser.urlencoded to get post request from html files

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function (req, res) {
  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.emailAddress;
  const birthday = req.body.birth;
  const mobileNumber = req.body.mobile;

  //Creating our "members" Key Value Pair
  // Data is going to be sent via the body parameter using a key called members.
  // members is an array of objects.

  //Creating a Javascript object "data"
  const data = {
    members: [
      {
        email_address: "email",
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
          BIRTHDAY: birthday,
          PHONE: mobileNumber,
        }
      }
    ]
  };

  // Turning object "data" to JSON format 
  const jsonData = JSON.stringify(data);           //This is what we're going to send to Mailchimp

  
  //As we want to post data to Mailchimp Server , we will Make "http.request" request to Mailchimp Server
 
  const url = "https://us6.api.mailchimp.com/3.0/lists/ddab5da5b7"
  const options = {
     method : "POST",
     auth : "manisha1:7ffceafcd5295d9ff326257cfffc0e51-us6"        //API Key
  }

const request =  https.request(url, options, function(response){
    response.on("data",function(data){
       console.log(JSON.parse(data));
    });

  });
   
  request.write(jsonData);
  request.end();
});






app.listen(3000, function () {
  console.log("Server started at port 3000");
});

// API Key:
//         7ffceafcd5295d9ff326257cfffc0e51-us6
// list id:
//         ddab5da5b7
