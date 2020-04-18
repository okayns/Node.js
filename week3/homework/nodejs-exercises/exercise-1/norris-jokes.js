const fetch = require('node-fetch');
const url = 'http://api.icndb.cosm/jokes/random';

fetch(url)
  .then((res) => res.json())
  .then((json) => console.log(json.value.joke))
  .catch((err) => console.error('Error', err.message));
