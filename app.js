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
  const numbers = req.query.numbers.map(val => parseInt( val, 10 ) );
  let ticket = [];

  for (let i = 0; i < 6; i++) {
    ticket.push(Math.floor(Math.random() * Math.floor(20)));
  }
  
  let filtered = ticket.filter(num => numbers.includes(num));
  if (filtered.length === 6) {
    res.send('Congratulations! You win $100!');
  }
  else if (filtered.length === 5) {
    res.send('Congratulations, you win a free ticket');
  }
  else if (filtered.length <= 4) {
    res.send('Sorry, you lose');}

});


app.listen(8000, () => {
  console.log('Express server is listening on port 8000!');
});