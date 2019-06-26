const Product = require('../models/product')

// testni podatki
const prod1 = new Product({
  name: 'Computer1',
  price: 1300,
  available: true,
  date: new Date()
})
const prod2 = new Product({
  name: 'Computer2',
  price: 300,
  available: false,
  date: new Date()
})
const prod3 = new Product({
  name: 'Computer3',
  price: 1000,
  available: true,
  date: new Date()
})
const prod4 = new Product({
  name: 'Computer4',
  price: 800,
  available: true,
  date: new Date()
})
module.exports = [prod1, prod2, prod3, prod4]
