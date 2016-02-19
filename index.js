var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http, { path: '/socket' });

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
    console.log('io socket connected at:', socket.handshake.url);
});

var port = process.env.NODE_PORT || 3000;
http.listen(port, function () {
    console.log('demo listening on ', port);
});