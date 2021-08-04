var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Connect MongoDB
var mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
mongoose
  .connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log('MongoDB Connected...');
  })
  .catch((err) => {
    console.log(err);
  });

//Configure API Routes
var jobsRouter = require('./routes/api/jobs');
var studentRouter = require('./routes/api/students');
var userRouter = require('./routes/api/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Use Routes
app.use('/api/jobs', jobsRouter);
app.use('/api/students', studentRouter);
app.use('/api/users', userRouter);

// Serve static assests if in production

if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/../client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/../client/build/index.html'));
  });
}

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
