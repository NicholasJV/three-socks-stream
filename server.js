
var path = require('path');
var http = require('http');
var server = http.createServer();

var express = require('express');
var app = express();

var socketio = require('socket.io');

//This will send typical CRUD requests down to
// our express server
server.on('request', app);

var io = socketio(server);

var oData;

io.on('connection', function(socket){

	console.log('a new client has connected');
	console.log('socket id: ', socket.id)
	// trying to accept the phone data?
	socket.on('orientationData', function(data){
		oData = data;
		socket.broadcast.emit('broadcastData', data)
	})
})

if (oData){
	setInterval(function(){console.log("from server:", oData)}, 1000);		
} else { console.log('no data has made it to the server')}


app.use(express.static(path.join(__dirname, 'scripts')));
app.use(express.static(path.join(__dirname, 'browser')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/detect', function (req, res){
	res.sendFile(path.join(__dirname, 'browser/detect.html'))
})



server.listen(8080, function () {
    console.log('The server is listening on port 8080!');
});


// app.use('/', )

