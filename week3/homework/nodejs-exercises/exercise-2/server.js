const fetch = require('node-fetch');

const url = 'https://restapiabasicauthe-sandbox.mxapps.io/api/books';
//Bonus Part
const keyword = 'admin:hvgX8KlVEa';
const buff = new Buffer(keyword);
const encodedKeyword = buff.toString('base64'); //(it can be also convert by using base64 node package)

fetch(url, { headers: { Authorization: `Basic ${encodedKeyword}` } })
  .then((resposnse) => resposnse.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
