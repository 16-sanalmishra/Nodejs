import path from 'path';
import express from 'express';
import hbs from 'hbs';
import getWeatherData from './utils/getWeatherData.js';

const app = express();

const dirname = 'C:\\Users\\sanamishra\\FrontEnd\\Nodejs\\02-webapp\\src';

const publicDirectoryPath = path.join(dirname, '../public');
const viewsPath = path.join(dirname, '../templates/views');
const partialsPath = path.join(dirname, '../templates/partials');

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
  if (!req.query.city) {
    return res.send({
      error: 'You must provide a city !',
    });
  }
  getWeatherData(req.query.city, (data) => {
    res.render('', {
      title: 'Weather Report',
      city: req.query.city,
      weatherInfo: data,
      name: 'John Doe',
    });
  });
});

app.get('/products', (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: 'you must provide a search term',
    });
  }
  console.log(req.query.search);
  res.send({
    products: [],
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