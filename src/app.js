const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const csvReaderRouter = require('./routes/csvReaderRoutes');

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use('/api/v1', csvReaderRouter);

module.exports = app;
