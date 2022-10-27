const path = require("path");
const fs = require("fs");
const http = require("http");
const port = 1000

const server = http.createServer((req, res) => {
   if(req.url === "/") {
    let filePath = path.join(__dirname, "public", "index.html");
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            res.statusCode(500).json(err);
        } else {
            res.writeHead(200, {"content-type": "text/html"});
            res.end(data);
        };
    });
   };


   if(req.url === "/home") {
    let filePath = path.join(__dirname, "public", "index.html");
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            res.statusCode(500).json(err);
        } else {
            res.writeHead(200, {"content-type": "text/html"});
            res.end(data);
        };
    });
   };


   if(req.url === "/about") {
    let filePath = path.join(__dirname, "public", "about.html");
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            res.statusCode(500).json(err);
        } else {
            res.writeHead(200, {"content-type": "text/html"});
            res.end(data);
        };
    });
   };


   if(req.url === "/contact") {
    let filePath = path.join(__dirname, "public", "contact.html");
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            res.statusCode(500).json(err);
        } else {
            res.writeHead(200, {"content-type": "text/html"});
            res.end(data);
        };
    });
   };
});

server.listen(port, () => {
   console.log(`Server is running on port ${port}`)
});
