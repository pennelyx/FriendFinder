var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 7000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


//route
app.get("/survey", function (req, res)){
	res.sendFile(path.join(__dirname,"./app/public/survey.html"));
};

app.use(function (req, res)){
	res.sendFile(path.join(__dirname,"./app/public/home.html"));
};






