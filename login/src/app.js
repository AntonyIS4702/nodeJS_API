// src/app.js
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const routes = require('./routes/users.routes');
const errorHandler = require('./middlewares/error.middleware');
const app = express();

app.use(helmet());
app.use(
  cors({
    origin: ["http://localhost:3001", "http://localhost:3000","https://test-project-mocha-mu.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use(morgan('dev'));

app.use('/api', routes);
app.use(errorHandler);
module.exports = app;