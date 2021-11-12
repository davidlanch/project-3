require("dotenv").config(); // import all key/value pairs from .env in process.env : really usefull when going online :)
require("./config/mongo"); // database connection setup
require("./config/passport");

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const passport = require("passport"); // auth library (needs sessions)
const cors = require("cors");




// ------------------------------------------
// SERVER CONFIG
// ------------------------------------------
const app = express();

// la doc dit : npx express-generator --no-view 
// comme ça pas de jade etc
// pour la prochaine fois ;)

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// ------------------------------
// SETUP the CORS rules here !!!
// ------------------------------

const corsOptions = {
  origin: [process.env.CLIENT_URL],
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


//------------------------------------------
// SPLITED ROUTING
// ------------------------------------------

const indexRouter = require('./routes/index');
const authRouter = require("./routes/auth");
const commentsRouter = require("./routes/comments");
const profileRouter = require("./routes/profile");
const ratesRouter = require("./routes/rates");
const recipesRouter = require("./routes/recipes");
const searchRouter = require("./routes/search");

app.use('/api', indexRouter);
app.use('/api', authRouter);
app.use('/api', commentsRouter);
app.use('/api', profileRouter);
app.use('/api', ratesRouter);
app.use('/api', recipesRouter);
app.use('/api', searchRouter);

module.exports = app;
