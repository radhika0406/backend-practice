const mongoose = require("mongoose");
const express = require("express");

const app  = express();
mongoose.connect();

app.listen(3000, (req,res) => {
    console.log('server is running...');
})