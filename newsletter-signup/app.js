const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const { Key } = require("@mui/icons-material");

const app = express();

app.use(express.static("public"));  // to pull up static page/files & not local , represents our static folder 
app.use(bodyParser.urlencoded({extended:true}));

app.listen(3000, (req, res) => {
  console.log("Server is running at PORT 3000");
});

app.post("/", (req,res) => {
  let firstName = req.body.fName;
  let lastName = req.body.lName;
  let email = req.body.email;
  console.log(firstName,lastName,email);
})

//so now you will here to following this 
// 1. You will get the API(to post the list of subscribers) from the service mailchink
// 2. You will create a request - using http request,url ,authentication Key
// 3. Then you will call that api and pass your data(in JSON form)
// 4. Then use the response object you get from the API call , to check the status code . And using that display success/ failure page
// 5. You can send the page using res.sendFile( the html file)

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/signup.html");
});
