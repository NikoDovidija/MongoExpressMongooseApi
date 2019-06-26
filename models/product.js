const mongoose = require('mongoose')
/*
Ustvarimo shemo za podatkovno bazo MongoDB produkta po primeru:

 {
    name : 'Computer 1',
    price : 1200,
    available: true,
    dateCreated:'Mon Oct 03 2016 15:22:08 GMT+0200 (CEST)'
}
*/

const productShema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  price: Number,
  available: Boolean,
  dateCreated: String
})

// Formatiranje zahtevka, brez mongodb default para kljuc, atribut _id in __v
productShema.methods.toJSON = function () {
  var obj = this.toObject()
  delete obj._id
  delete obj.__v
  return obj
}

// Middleware - Dodajanje datuma nastanka
productShema.pre('save', function (next) {
  this.dateCreated = new Date()
  next()
})

// Pretvorba sheme produkta v dejanski model produkta
const Product = mongoose.model('Product', productShema)

module.exports = Product
