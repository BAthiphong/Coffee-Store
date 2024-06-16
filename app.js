const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT;
const route = require('./src/router/route')

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "/src")));

app.set("views", "./src/views");
app.set("view engine", "ejs");

// Define routes
app.use('/', route);

app.get("/" , (req,res) =>{

  // res.send("Coffee Store!!");
  res.render('index');

})

app.listen(PORT, () => {
  console.log('Listening on port ' + chalk.green(PORT));
  debug('Listening on PORT ' + chalk.green(PORT));
})