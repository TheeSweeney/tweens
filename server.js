var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var port = process.env.PORT || 3000;

app.set('port', port);

app.use(bodyParser.json());
// Parse forms (signup/login)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));


//if there is time, separate routes into a different routing file
app.get('/', function(req, res) {
	res.sendFile(__dirname + "/static/index.html")
})

app.get('/loginRed', function(req, res) {
	res.sendfile(__dirname + "/static/loginRed.html")
})


console.log('Icreon is listening on port ' + port);
app.listen(port);