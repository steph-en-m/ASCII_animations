// Setting up a simple server in nodejs

var http = require('http');

var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hows quarantine');
});

server.listen(5000, '127.0.0.1');
console.log('Now listening on port 5000');
