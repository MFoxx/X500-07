var http = require('http');
var express = require('express');
var app = express();
const five = require('johnny-five');

var server = http.createServer(app);
// Pass a http.Server instance to the listen method
var io = require('socket.io').listen(server);

// The server should start listening
server.listen(8080);

// Register the index route of your app that returns the HTML file
app.get('/', function(req, res) {
	console.log('Homepage');
	res.sendFile(__dirname + '/app/main.html');
});

app.get('/index.js', function(req, res) {
	console.log('Homepage');
	res.sendFile(__dirname + '/app/index.js');
});

app.get('/css/main.css', (req, res) => {
	res.sendFile(__dirname + '/app/css/main.css');
});

// Expose the node_modules folder as static resources (to access socket.io.js in the browser)
app.use('/static', express.static('node_modules'));

// const board = new five.Board();

// board.on('ready', () => {
// 	const base = new five.Servo({
// 		pin: 13,
// 		invert: true,
// 		center: true
// 	});
// 	const hand01 = new five.Servo({
// 		pin: 12,
// 		invert: true,
// 		center: true
// 	});

// 	io.sockets.on('connection', (socket) => {
// 		socket.on('inputBase', (x) => {
// 			base.to(x);
// 		});

// 		socket.on('resetBase', () => {
// 			base.to(90);
// 		});

// 		socket.on('inputHand01', (x) => {
// 			hand01.to(x);
// 		});
// 		socket.on('resetHand01', () => {
// 			hand01.to(90);
// 		});
// 	});
// });
