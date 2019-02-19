'use strict';

const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));

app.get('/sum', (req, res) => {
  const {a, b} = req.query;
  console.log(req.query);
  const  req1 = parseInt(a, 10);
  const req2 = parseInt(b,10);
  console.log(req1, req2);
  const sum = req1 + req2; 
  res.send(`The sum of ${req1} and ${req2} equals ${sum}`);
});


app.listen(8000, () => {
  console.log('Express server is listening on port 8000!');
});