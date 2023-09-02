var createError = require("http-errors");
var express = require("express");
var router = express.Router();
const nodemailer = require("nodemailer");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

require("dotenv").config();
var pool = require("./models/db");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);




//aca
//seleccionar
// pool.query('select * from menu').then(function (menu){
//   console.log(menu)
// });

//insertar
// var obj = {
//   nombremenu : 'ensalada',
//   comida : 'ensalada regular de lechuga y tomate',
//   precio : '2'
// }

// pool.query('insert into menu set ?',[obj]).then(function (resultados){
//   console.log(resultados)
// });

//cambiar
// var id = 3;
// var obj = {
//   nombremenu: 'helado',
//   comida: 'helados con variedad de sabores',
//   precio: '$1'
// }

// pool.query('update menu set ? where id=?',[obj, id]).then(function (resultados) {
//   console.log(resultados);
// });

//borrar
// var id = 3;
// pool.query('delete from menu where id=?',[id]).then(function (resultados){
//   console.log(resultados);
// });

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

//enviar correos

//fin correos
module.exports = app;
