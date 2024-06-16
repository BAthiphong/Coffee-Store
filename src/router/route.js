const express = require('express');
const route = express.Router();

const newProducts = require('../data/new_product.json');
const darkRoasts = require('../data/dark_roasts.json');
const decaffeinateds = require('../data/decaffeinated.json');
const expressos = require('../data/espresso.json');
const icedCoffees = require('../data/iced_coffees.json');
const reservedCoffees = require('../data/reserved_coffees.json');
const signatures = require('../data/signature.json');

route.get('/', (req, res) => {
  res.render('index', { newProducts });
});

route.get('/darkroasts', (req, res) => {
  res.render('dark_roasts', {darkRoasts});
})

route.get('/decaffeinateds', (req, res) => {
  res.render('decaffeinateds', { decaffeinateds });
})

route.get('/espresso', (req, res) => {
  res.render('espresso', { expressos });
})

route.get('/icecoffees', (req, res) => {
  res.render('iced_coffees', { icedCoffees });
})

route.get('/reservedcoffees', (req, res) => {
  res.render('reserved_coffees', { reservedCoffees });
})

route.get('/signature', (req, res) => {
  res.render('signature', { signatures });
})

module.exports = route;