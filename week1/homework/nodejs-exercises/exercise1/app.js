'use strict';

const padLeft = require('./andrejs-awesome-function');
const numbers = ['12', '846', '2', '1236'];
//padLeft(number, 4 , " ") --- this hint doesn`t meet with requirements. num should be 5 instead of 4...
numbers.forEach(number => {
  console.log(padLeft(number, 5, '_'));
});
