const express = require('express')
const router = require('./router')
const bodyParser = require('body-parser');

const app = express();

app.use(router);
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

module.exports = app;