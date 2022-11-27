const express = require('express');
const https = require("https");
const app = express();

app.listen('3000', (req,res) => {
    console.log('Server is running on 3000');
});

app.get("/", (req,res) =>{
    https.get("https://www.google.com",(response) => {
        console.log(response.statusCode);

        response.on("data", (data) => { //this was the response from the API call you made
            //console.log(data); -> hexa decimal code
            const googleData = JSON.parse(data);
            console.log(googleData);
            //you can only have one res.send, but many res.write
            res.send("The google data is ", googleData); // this is the response you are sending from your server to  the client
        })
    })
    res.send("Server is running");
})