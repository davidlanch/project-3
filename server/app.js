require("dotenv").config(); // import all key/value pairs from .env in process.env : really usefull when going online :)
require("./config/mongo"); // database connection setup
require("./config/passport");

const createError = require("http-errors");
const session = require("express-session"); //sessions make data persist between http calls
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const passport = require("passport"); // auth library (needs sessions)
const cors = require("cors");
const _DEVMODE = false;

// ------------------------------------------
// SERVER CONFIG
// ------------------------------------------
const app = express();

// la doc dit : npx express-generator --no-view
// comme ça pas de jade etc
// pour la prochaine fois ;)

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "public/build")));

app.use(
  session({
    cookie: { secure: false, maxAge: 4 * 60 * 60 * 1000 }, // 4 hours
    resave: true,
    saveUninitialized: true,
    secret: process.env.SECRET_SESSION,
  })
);

// ------------------------------
// SETUP the CORS rules here !!!
// ------------------------------

const corsOptions = {
  origin: [process.env.CLIENT_URL],
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(passport.initialize());
app.use(passport.session());

//------------------------------------------
// Check Loggedin Users
// ------------------------------------------
if (_DEVMODE === true) {
  app.use(function devMode(req, res, next) {
    req.user = {
      _id: "618e776f51691f42b9050f3f",
      username: "admin",
      email: "admin@foobarbaz.io",
      avatar:
        "https://cdn.onlinewebfonts.com/svg/img_258083.png",
      favorites: ["618e8575e1c403fe7e972837"],
    };

    next();
  });
}

//------------------------------------------
// SPLITED ROUTING
// ------------------------------------------

const indexRouter = require("./routes/index");
const authRouter = require("./routes/auth");
const commentsRouter = require("./routes/comments");
const profileRouter = require("./routes/profile");
const ratesRouter = require("./routes/rates");
const recipesRouter = require("./routes/recipes");
const searchRouter = require("./routes/search");

app.use(indexRouter);
app.use(authRouter);
app.use(commentsRouter);
app.use(profileRouter);
app.use(ratesRouter);
app.use(recipesRouter);
app.use(searchRouter);

// catch 404 and forward to error handler
app.use("/api/*", (req, res, next) => {
  next(createError(404));
});

if (process.env.NODE_ENV === "production") {
  app.use("*", (req, res, next) => {
    // If no routes match, send them the React HTML.
    res.sendFile(path.join(__dirname, "public/build/index.html"));
  });
}

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500).json({
    error: req.app.get("env") === "development" ? err : {},
    message: err.message,
  });
});

module.exports = app;
