const path = require('path');
const express = require('express');

const app = express();

const publicDirectoryPath = path.join(__dirname, '../public');

// console.log(publicDirectoryPath);
app.set('view engine' , 'hbs');
app.use(express.static(publicDirectoryPath));

app.get('/weather', (req, res) => {
  res.send({
    forecast: 'It is cloudy',
    location: 'Chennai',
  });
});
app.get('/about' , (req,res) =>{
res.render('about' , {
  title: 'About Us', 
  name:'Sanal'
})
})
app.get('/help' , (req,res) =>{
  res.render('help' , {
    Greetings:'Welcome To HBS'
  })
  })
  app.get('/index' , (req,res) =>{
    res.render('index' , {
      Text:'Welcome To Landing Page'
    })
    })

app.listen(3000 , ()=>{
    console.log("running");
});