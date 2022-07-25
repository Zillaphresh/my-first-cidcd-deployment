var http = require("http");
var server = http.createServer(function (req, res) {
res.writeHead(200);
res.sendFile("index.html");
});
server.listen(3000);