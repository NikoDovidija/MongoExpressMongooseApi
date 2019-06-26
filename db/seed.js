const Product = require('../models/product')
const productList = require('../db/sampleProducts')

// razred za polnjenje zbirke z zapisi
class DbSeeder {
  seedDb () {
    Product.deleteMany({}).then(() => {
      Product.insertMany(productList).then(() => {
        console.log('Seeding success')
      }).catch((err) => {
        if (err) {
          console.log(`seed fail due to error ${err}`)
        }
      })
    })
  }
}

module.exports = new DbSeeder()
