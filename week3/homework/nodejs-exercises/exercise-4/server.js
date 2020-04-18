const Handlebars = require('handlebars');

const subjects = [
  'shark',
  'popcorn',
  'poison',
  'fork',
  'cherry',
  'toothbrush',
  'cannon',
];

const punchlines = [
  'watch movie with',
  'spread some love',
  'put on cake',
  'clean toilets',
  'go to the moon',
  'achieve world piece',
  'help people learn programing',
];

const rng = Math.floor(Math.random() * 7);

const data = {
  randomSubject: subjects[rng],
  randomPunch: punchlines[rng],
};

const source = '{{randomSubject}} is great to {{randomPunch}}';
const template = Handlebars.compile(source);
const result = template(data);

console.log(result);
