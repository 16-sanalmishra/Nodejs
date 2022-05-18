const express = require('express');
const app = express();
app.get('', (req, res) => {
    res.send('<h1>Hello Express!!</h1>');
  });
  
  app.get('/help', (req, res) => {
    res.send([
      {
        name: 'Andrew',
      },
      {
        name: 'RK',
      },
    ]);
  });
  
  app.get('/about', (req, res) => {
    res.send('<h2>About Us</h2>');
  });
  
  app.get('/weather', (req, res) => {
    res.send({
      forecast: 'It is cloudy',
      location: 'Chennai',
    });
  });
app.listen(3000 , ()=>{
    console.log("running");
});