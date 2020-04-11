const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const port = 3000;

app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/weather', (req, res) => {
  const cityName = req.body.cityName;
  if (cityName === '') {
    res.json({ msg: 'Enter Valid CityName' }).status(404);
  } else {
    res.json({ cityName });
  }
});

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
