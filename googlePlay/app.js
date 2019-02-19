'use strict'; 
const express = require('express');
const morgan = require('morgan');
const games = require('./games');

const app = express();

app.use(morgan('dev')); 

app.get('/apps', (req, res) => {
  const { genres='', sort} =req.query;
  console.log(req.query);
  if(sort){
    if(!['rating', 'app'].includes(sort)) {
      return res
        .status(400)
        .send('Sort must be one of rating or app');
    }
  }

  let results = games.filter(game => 
    game
      .Genres
      .toLowerCase()
      .includes(genres.toLowerCase()));

  if(sort){
    results.sort((a, b) =>{
      return a[sort] > b [sort] ? 1 : a[sort] < b[sort] ? -1 : 0;
    });
  }
  res.json(results);
});


app.listen(8000, () => {
  console.log('Server started on PORT 8000');
});