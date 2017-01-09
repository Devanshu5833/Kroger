var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server)
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cons = require('consolidate');
var Nested = require('nested-observe');
var object = require('object.observe');
var index = require('./routes/index');
var users = require('./routes/users');
var online = 0 ;
var offline = 0;

//Socket Send Data for Online offline users
io.sockets.on('connection',function(socket){
      socket.on('client',function(data){
          console.log(data);
      })
      socket.emit('server','Hello From Server');
});

setInterval(randomgenerate,2000);

function randomgenerate(){
    var online = Math.floor((Math.random() * 100) + 1);
    var offline = Math.floor((Math.random() * 100) + 1);
    var data = {'online':online,'offline':offline};
     io.emit('status',data);

    console.log(data);
}



// view engine setup
app.engine('html', cons.swig)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

//PORT declaration
app.set('port',8080 || process.env.PORT );

//Server creation on port 8080
server.listen(app.get('port'),function(err){
    if(err){
      console.log('Server Not Started');
    }else {
      console.log('Server Started on PORT 8080');
    }
});

module.exports = app;
