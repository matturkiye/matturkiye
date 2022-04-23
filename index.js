const express = require("express");
const application = express();
const port = 3000;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "index.html")
});