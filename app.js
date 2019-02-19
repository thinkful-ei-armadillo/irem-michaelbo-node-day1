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

app.get('/cypher', (req, res) =>{
  const { text, shift } = req.query;
  const textArray = text.split('');
  const newString = textArray.map(letter => {
    const code = letter.charCodeAt(0);
    const convert = parseInt(shift, 10);
    return String.fromCharCode(code + convert);

  })
  let newWord = newString.join('');
  res.send(newWord);


});

app.get('/lotto', (req, res) => {
  const { numbers: [] } = req.query;
  const winner = (Math.floor(Math.random() * Math.floor(20)));
  let ticket = [];
  for (let i = 0; i < 6; i++) {
    ticket.push(winner);
    return ticket
  }

  
  console.log(winner, ticket);
  res.send('Test is done');
})


app.listen(8000, () => {
  console.log('Express server is listening on port 8000!');
});