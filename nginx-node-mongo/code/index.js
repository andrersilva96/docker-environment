var http = require('http');

const PORT = 3000;

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');
}).listen(PORT);

console.log('Server running at http://localhost:'+PORT+'/');
