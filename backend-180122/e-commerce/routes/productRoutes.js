const express = require('express')
const router = express.Router()
const { 
    getProducts,
    getSingleProduct, 
    createProduct, 
    deleteProduct, 
    filterProductsByPrice,
    updateProduct } = require('./../controller/productController')

router.get('/', getProducts )
router.get('/:id', getSingleProduct)
router.post('/filter', filterProductsByPrice)
router.post('/', createProduct)
router.delete('/:id', deleteProduct)
router.put('/:id', updateProduct)
module.exports = router