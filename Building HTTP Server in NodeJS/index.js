const { log } = require("console");
const http = require("http");
const fs = require("fs");


const myServer = http.createServer((req, res) => {
    // console.log("new req rec");
    const log = `${Date.now()} ${req.url} New req recived \n`;
    fs.appendFile("log.txt", log, (err, data) => {

        switch (req.url) {
            case "/": res.end("Hello My Server")
                break;
            case "/about": res.end("I am bilal")
                break
            default:  res.end("404 not found")
        }
    })
});

myServer.listen(8000, () => {
    log("Server started");
});    