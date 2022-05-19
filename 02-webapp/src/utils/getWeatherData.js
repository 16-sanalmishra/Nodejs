import request from 'request';
import { accessKey } from './accessKey.js';

export default function getWeatherData(city) {
  const url =
    'http://api.weatherstack.com/current?access_key=' +
    accessKey +
    '&query=' +
    city;

  console.log(url);

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      console.log('Error occurred: ' + error);
    } else if (response.body.success === false) {
      console.log('Error occurred: ' + response.body.error.info);
    } else if (response.body.success !== false) {
      console.log(
        response.body.location.name +
          ', ' +
          response.body.location.country +
          ': ' +
          response.body.current.weather_descriptions[0] +
          '. It is currently ' +
          response.body.current.temperature +
          ' degrees.'
      );
    }
  });
}

// module.exports = getWeatherData;