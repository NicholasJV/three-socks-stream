var path = require('path');
var http = require('http');
var server = http.createServer();
var chalk = require('chalk');
var socketIO = require('socket.io');

var express = require('express');
var app = express();

server.on('request', app);

// =-=-=-=-=-=-= Socket connect init =-=-=-=-=-=-=-=

// device orientation data:
var io = socketIO(server);
var oData;
io.on('connection', function(socket){
	console.log(chalk.yellow('a new client has connected'), '(ID: '+socket.id+')');
	socket.on('orientationData', function(data){
		oData = data;
		socket.broadcast.emit('broadcastData', data)
	})
})

if (oData){
	setInterval(function(){console.log("from server: ", oData)}, 1000);
} else { console.log('...waiting for data from the server...') }

// =-=-=-=-=-=-= Simple server routes =-=-=-=-=-=-=-=

app.use(express.static(path.join(__dirname, 'scripts')));
app.use(express.static(path.join(__dirname, 'browser')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/control', function (req, res){
	res.sendFile(path.join(__dirname, 'browser/detect.html'))
})

server.listen(8080, function () {
  console.log(chalk.green('The server is listening on port 8080!'));
});
