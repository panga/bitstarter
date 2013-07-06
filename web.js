var express = require('express'),
    fs = require('fs');

var app = express.createServer(express.logger());

function indexHandler(req, res) {
    fs.readFile(__dirname + "/index.html",

    function(err, data) {
        if (err) {
            res.writeHead(500);
            return res.end(err);
        }

        res.writeHead(200);
        res.end(data);
    });
}

app.get("/", indexHandler);

var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});