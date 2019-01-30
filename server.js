
const express = require('express')
const app = express();

app.use(express.static('public')); // This will throw our html file to browser If you want you can directly open it aswell

app.get('/button1', function (req, res) {
  console.log('User hit button 1');

  res.send('Hello button 1, this is server')
});

app.get('/button2', function (req, res) {
  console.log('User hit button 2');

  res.send('Hello button 2, this is server')
});

app.listen(3000, function () {
  console.log("the server is up on 3000");
});
