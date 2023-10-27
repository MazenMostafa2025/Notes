// setup server
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const babelPolyfill = require('babel-polyfill');
const noteRoute = require('./route/noteRoute');
const memoryStorage = require('memorystorage');


var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

app.use('/api/v1', noteRoute);





const port = 8000;
app.listen(port);