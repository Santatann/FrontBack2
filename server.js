const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile('index.html', (err, data) => {
            if (err) {
                res.writeHead(500);
                return res.end('Ошибка сервера');
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    } else if (req.url === '/404') {
        fs.readFile('404.html', (err, data) => {
            if (err) {
                res.writeHead(500);
                return res.end('Ошибка сервера');
            }
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        fs.readFile('404.html', (err, data) => {
            if (err) {
                res.writeHead(500);
                return res.end('Ошибка сервера');
            }
            res.end(data);
        });
    }
});

server.listen(3000, () => {
    console.log('Сервер запущен на http://localhost:3000');
});
