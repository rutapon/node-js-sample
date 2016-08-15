//var app = require('express')();
//var http = require('http').Server(app);
//var io = require('socket.io')(http);

var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
    response.send('Hello World! by newww');
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})


//app.get('/', function (req, res) {
//    res.sendfile('index.html');
//});

//io.on('connection', function (socket) {
//    console.log('a user connected');
//});

//http.listen(3000, function () {
//    console.log('listening on *:3000');
//});