const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;
const home = fs.readFileSync('./index.html');
const order = fs.readFileSync('./index/order.html');


const server = http.createServer((req, res) => {
    console.log(req.url);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(home);

})

server.listen(port, hostname, () => {
    console.log(`server running at http://127.0.0.1.3000/`);
});