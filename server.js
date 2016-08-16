"use strict";

var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');

var login = require("./backend/controllers/login");

let app = express();
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/login', login);

app.use(express.static('src'));


app.listen(3000);

