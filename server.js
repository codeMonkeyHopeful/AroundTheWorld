const chalk = require('chalk');
const express = require('express');
const path = require('path');
//call in .env here


const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, './build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/components/index.html'));
});

app.listen(PORT, () => {
  console.log(
    chalk.green('Express server listening on PORT: '),
    chalk.cyan(PORT)
  );
});
