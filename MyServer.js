const http = require('http');
const url = require('url');

const port = 8000;
const hostname = 'localhost';
const baseUrl = 'http://' + hostname + ':' + port;

function start(route) {
    function onRequest(req, res) {
        let sBody = 'hello,world <br> i am in the.';

        console.log('Require receive.');
        pathname = url.URL(req.url, baseUrl)
        route(pathname);

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('hello, world');
        res.end();
    }

    server = http.createServer(onRequest);
    server.listen(port, hostname);
    conlone.log('Server is runnint at' + baseUrl);
}

exports.start = start;