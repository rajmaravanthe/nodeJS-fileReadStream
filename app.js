var http = require('http');
fs = require('fs')

var server = http.createServer(function (request, response) {
    response.writeHead(200, { "content-type": "text/plain" });
    var readableStream = fs.createReadStream('./file.txt');
    var data = '';

    readableStream.on('data', function (chunk) {
        data += chunk;
    });

    readableStream.on('end', function () {
        console.log(data);
    });

});

server.listen(3000);

