//Express server.

var express = require('express');
var app = express();
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('index');
});

app.get('/about', function(req, res){
    res.send('Call me maybe');
});

//passing route params
app.get('/user/:id', function(req, res){
    res.send('Viewing user ' + req.params.id);
});

app.listen(3000);


















// Setting up a simple server in node.js

/*var http = require('http');

var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hows quarantine');
});

server.listen(6000, '127.0.0.1');
console.log('Now listening on port 6000');
*/
