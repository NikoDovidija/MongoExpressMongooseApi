const Product = require('../models/product')

// Akcija za POST /product
exports.createProduct = function (req, res, next) {
  let product = new Product({
    name: req.body.name,
    price: req.body.price,
    available: req.body.available
  })
  product.save(function (err2, saved) {
    if (err2) {
      return next(err2)
    }
    res.redirect('/products')
  })
}

// Akcija za GET/ products
exports.getProducts = function (req, res, next) {
  Product.find(function (err, docs) {
    if (err) {
      return next(err)
    }
    res.send(docs)
  })
}

// Akcija za GET product/:id
exports.getProductById = function (req, res, next) {
  Product.findById(req.params.id, function (err, prod) {
    if (err) return next(err)
    res.send(prod)
  })
}

// Akcija za DELETE product/:id
exports.deleteProductById = function (req, res, next) {
  Product.findByIdAndRemove(req.params.id, function (err) {
    if (err) return next(err)
    res.redirect('/products')
  })
}

// Akcija za PUT product
exports.updateProductById = function (req, res, next) {
  Product.findByIdAndUpdate(req.body.id, { $set: req.body }, function (err, product) {
    console.log(req.body.id)
    if (err) return next(err)
    res.redirect('/products')
  })
}
