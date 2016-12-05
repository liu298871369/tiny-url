var express = require("express");
var app = express();
var restRouter = require("./routes/rest");
var redirectRouter = require("./routes/redirect");
var indexRouter = require("./routes/index");
var mongoose = require("mongoose");

mongoose.connect("mongodb://user:user@ds139277.mlab.com:39277/tinyurl-3");

app.use("/public", express.static(__dirname + "/public"));

app.use("/api/v1", restRouter);

app.use("/", indexRouter);

app.use("/:shortUrl", redirectRouter);

app.listen(3000);