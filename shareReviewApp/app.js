var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var gamingRouter = require('./routes/gaming');
var moviesRouter = require('./routes/music');
var musicRouter = require('./routes/movies');

var app = express();

//Set up mongoose connection
//var mongoose = require('mongoose');
//var mongoDB = 'mongodb+srv://admin:pass@cluster0.ubgm1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
//mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});
//var db = mongoose.connection;
//db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/gaming', gamingRouter);
app.use('/movies', moviesRouter);
app.use('/music', musicRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
