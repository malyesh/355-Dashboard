const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/HTML/index.html');
});

app.listen(port, () => {
  console.log(`Webpage listening at http://localhost:${port}`);
});
