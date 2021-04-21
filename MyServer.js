const http = require('http');

const port = 8000;
const hostname = 'localhost';
const baseUrl = 'http://' + hostname + ':' + 8000;

function start() {
    function onRequest(req, res) {
        res.writeHead(200, { 'Content - Type': 'text/html' });
        res.write('hello, world');
        res.end();
    }

    server = http.createServer(onRequest);
    server.listen(port, hostname);
    conlone.log('Server is runnint at' + baseUrl);
}

exports.start = start;