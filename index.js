// Create a Calculator Using Forms
// Create a page with four forms, one for each calculation.

// Each form should have two inputs and post to its own route.

// The server will then perform the desired calculation for the specific form 
// and send the result as plain text as response.

// For example, if I enter 2 and 4 in the addition form and submit it, a new 
// page should be rendered that says 6.

// To get you started, here's where the forms should post:

// /add
// /subtract
// /multiply
// /divide
// Also remember that you'll need body parser.

// req.params // request params
// req.query // query params
// req.body // body params

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Tell express to use EJS as its view engine
app.set("view engine", "ejs");

// Set up body parser
app.use(bodyParser.urlencoded({ extended: false }));

var x = 0;
var y = 0;
var total = 0;

// Set a root route
app.get('/', function(req, res) {
	res.render("index");
});

app.post('/add', function(req, res) {
	x = parseInt(req.body.x, 10);
	y = parseInt(req.body.y, 10);
	total = x + y;
	console.log(x, y, total);
	res.render("result", { total: total });
});

app.post('/subtract', function(req, res) {
	x = parseInt(req.body.x, 10);
	y = parseInt(req.body.y, 10);
	total = x - y;
	console.log(x, y, total);
	res.render("result", { total: total });
});

app.post('/multiply', function(req, res) {
	x = parseInt(req.body.x, 10);
	y = parseInt(req.body.y, 10);
	total = x * y;
	console.log(x, y, total);
	res.render("result", { total: total });
});

app.post('/divide', function(req, res) {
	x = parseInt(req.body.x, 10);
	y = parseInt(req.body.y, 10);
	total = x / y;
	console.log(x, y, total);
	res.render("result", { total: total });
});

app.listen(3000, function() {
	console.log('Server listening on port 3000');
});