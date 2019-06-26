const express = require('express')
const router = express.Router()
const productController = require('../controllers/productController')

// posazmeni endpointi za api
router.get('/products', productController.getProducts)
router.get('/product/:id', productController.getProductById)
router.delete('/product/:id', productController.deleteProductById)
router.put('/product', productController.updateProductById)
router.post('/product', productController.createProduct)

module.exports = router
