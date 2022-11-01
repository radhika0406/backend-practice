const express = require('express');

const app = express();

app.get("/", function(req, res){
    //you can send html in response as well
    res.send("Hello");
});

app.get("/contact", (req,res) => {
    res.send("Contact me at @radhikashah0406@gmail.com");
});

app.get("/about", (req,res) => {
    res.send("Hey I am Radhika, Software Engineer!");
})

app.listen(3001, function(){
    console.log('Server started at PORT 3000');
});