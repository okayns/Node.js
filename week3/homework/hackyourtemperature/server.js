const express = require('express');
const axios = require('axios');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();

// Handlebars Middleware
app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));

// Body Parser Middleware
app.use(express.urlencoded({ extended: true }));

//Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Homepage Route
app.get('/', (req, res) => {
  res.render('index');
});

// /weather page post request
app.post('/weather', (req, res) => {
  const API_KEY = require('./sources/keys.json').API_KEY;
  const cityName = req.body.cityName;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;
  if (cityName) {
    axios
      .get(url)
      .then((response) => {
        res.render('index', {
          cityName: cityName,
          weatherText: response.data.main.temp,
        });
      })
      .catch((err) =>
        res.render('index', { weatherText: 'City is not found!' }),
      );
  } else {
    res.render('index', { notFound: "You can't leave empty City field..." });
    // res.json({ msg: "You can't leave empty City field..." });
  }
});

const port = process.env.PORT || 3000; // i used that to make it work in heroku.app

app.listen(port, () => {
  console.log('server started');
});
