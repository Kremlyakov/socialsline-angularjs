"use strict";

var express = require("express");
var path = require("path");

let app = express();

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.use(express.static('src'));

app.listen(3000);