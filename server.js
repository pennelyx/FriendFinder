var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Initialize express bodyparser
var app = express();
var PORT = process.env.PORT || 7000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


//PORT listening
app.listen(PORT, function(){
	console.log("App listening on PORT" + PORT);
});


//route
require ("./app/routing/apiRoutes.js")(app);
require ("./app/routing/htmlRoutes.js")(app);



