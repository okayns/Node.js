const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('hello from backend to frontend!');
});

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
