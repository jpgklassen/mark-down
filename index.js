var marked = require("marked");
var express = require('express');
var fs = require("fs");
var app = express();



app.get('/', function (req, res) {
    fs.readFile("./homepage.md", {encoding: "UTF-8"}, function (err, file) {
        res.send(marked(file));
    });
});

app.get('/about', function (req, res) {
  res.send('Hello World');
});

app.listen(3000);
