const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;
app.use(express.json());

//Creating Blog Page to Server
app.post('/blogs', (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  fs.writeFileSync(title, content);
  res.end('ok');
});

//Updating if exist, if doesnt exist gives error
app.put('/blogs', (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  if (fs.existsSync(title)) {
    fs.writeFileSync(title, content);
    res.end('ok');
  } else {
    res.end('post does not exist');
  }
});

//Deleting Post
app.delete('/blogs/:title', (req, res) => {
  // How to get the tilte from the url parameters?
  const title = req.params.title;
  fs.unlinkSync(title);
  res.end('ok');
});

//Reading Post
app.get('/blogs/:title', (req, res) => {
  // How to get the tilte from the url parameters?
  const title = req.params.title;
  res.sendfile(title);
});

app.listen(port, () => console.log('Server started on port: ', port));
