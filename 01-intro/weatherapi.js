// http://api.weatherstack.com/current?access_key=YOUR_ACCESS_KEY&query=New York

// import request from 'request'
// const url = 'http://api.weatherstack.com/current?access_key=8cfa138facddd6c9b48023859084947d&query=Mathura';

// request({ url: url, json: true }, (error, response) => {
//     // console.log(response.body);
//     // console.log(response.body.current);
//     console.log("It is currently " + response.body.current.temperature + " degree celcius" + " in " + response.body.location.name);
// })
import request from 'request';
import { accessKey } from './accessKey.js';
const url =
  'http://api.weatherstack.com/current?access_key=' +
  accessKey +
  '&query=Mumbai';

// request({ url: url }, (error, response) => {
//   const data = JSON.parse(response.body);
//   console.log(data);
// });

request({ url: url, json: true }, (error, response) => {
  // console.log(response.body);
  // console.log(error);
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