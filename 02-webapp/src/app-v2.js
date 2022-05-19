const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// console.log(publicDirectoryPath);
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather Report',
    name: 'John Doe',
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Us Dynamic',
    name: 'RK',
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help Page',
    name: 'RK',
    helpText: 'Welcome to the product support page',
  });
});

app.get('/weather', (req, res) => {
  res.send({
    forecast: 'It is cloudy',
    location: 'Chennai',
  });
});

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Max',
    errorMessage: 'Help Page not found.',
  });
});

app.get('*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Max',
    errorMessage: 'Page not found.',
  });
});

app.listen(3000, () => {
  console.log('Server is up and running on port 3000');
  // console.log(__dirname);
});