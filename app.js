var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
const MongoStore = require('connect-mongo')(session);

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var searchRouter = require('./routes/search');
var catchBrandRouter = require('./routes/catchBrand');
var catchCarTypeRouter = require('./routes/catchCarType');
var catchDisplacementRouter = require('./routes/catchDisplacement');
var catchYearRouter = require('./routes/catchYear');
var fillListRouter = require('./routes/fillList');
var obd2Router = require('./routes/obd2');
var YTRouter = require('./routes/YT');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'recommand 128 bytes random string',
  store:new MongoStore({url:'mongodb://localhost:27017/sessiondb'}),
  cookie:{maxAge: 86400*1000},
  resave: false,
  saveUninitialized: true

}));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/search', searchRouter);
app.use('/catchBrand', catchBrandRouter);
app.use('/catchCarType', catchCarTypeRouter);
app.use('/catchDisplacement', catchDisplacementRouter);
app.use('/catchYear', catchYearRouter);
app.use('/fillList', fillListRouter);
app.use('/obd2', obd2Router);
app.use('/YT', YTRouter);

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
