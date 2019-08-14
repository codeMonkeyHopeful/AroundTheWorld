const chalk = require('chalk');
const express = require('express');
const path = require('path');
require('dotenv').config();
//console.log(process.env.IP_STACK_API)

const app = express();
const PORT = process.env.PORT;

app.use(express.static(path.join(__dirname, './build')));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/components/index.html'));
});

app.listen(PORT, () => {
  console.log(
    chalk.green('Express server listening on PORT: '),
    chalk.cyan(PORT)
  );
});
