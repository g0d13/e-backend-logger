const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const HOST_NAME = '127.0.0.1'
const DATABASE_NAME = 'logger'

mongoose.connect('mongodb://' + HOST_NAME + '/' + DATABASE_NAME);

//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use('/api', require('./routes/logs.routes'));
app.use('/api', require('./routes/application.routes'));
app.use(require('./utils/errorHandler'));

module.exports = app;
