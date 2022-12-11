const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();

app.use(express.static("public")); // to pull up static page/files & not local , represents our static folder
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, (req, res) => {
  console.log("Server is running at PORT 3000");
});

app.post("/", (req, res) => {
  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.email;

  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        },
      },
    ],
  };
  const jsonData = JSON.stringify(data); 
  const url = "https://us13.api.mailchimp.com/3.0/lists/4bcf3cbb34";

  const options = {
    method: "POST",
    auth: "radhika:9eefb09d1ac7d59482e3ee802a3caf03-us13",
  };

  const request = https.request(url, options, (response) => {
    response.on("data", (data) => {
      console.log(JSON.parse(data));
    });
  });

  request.write(jsonData);
  request.end();

  console.log(firstName, lastName, email);
});

//so now you will here to following this
// 1. You will get the API(to post the list of subscribers) from the service mailchink
// 2. You will create a request - using http request,url ,authentication Key
// 3. Then you will call that api and pass your data(in JSON form)
// 4. Then use the response object you get from the API call , to check the status code . And using that display success/ failure page
// 5. You can send the page using res.sendFile( the html file)

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/signup.html");
});


//List id  - fake
//4bcf3cbb34
