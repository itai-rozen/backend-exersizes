const Product = require('./../models/model')
const { addProduct, getProductById } = require('./../utils')

const getProducts = async (req, res) => {
    try {
        const products = await Product.find()
        res.json({ products: products })
    } catch (err) {
        res.json({ message: 'Failed getting products' })
    }
}

const getSingleProduct = async (req, res) => {
    const { id } = req.params
    console.log('id: ', id)
    try {
        const product = await getProductById(id)
        if (product) res.json({ product: product })
        else res.send('product not found')
    } catch (err) {
        res.send('Error: ', err)
    }
}

const createProduct = async (req, res) => {
    try {
        const product = await addProduct(req.body)
        console.log('product: ', product)
        const newProduct = await product.save()
        res.send(newProduct)
    } catch (err) {
        res.send(err)
    }
}

const deleteProduct = async (req, res) => {
    const { id } = req.params
    console.log('id: ', id)
    try {
        await Product.deleteOne({ _id: id })
        res.send('deleted successfully')
    }
    catch (err) {
        res.send(err)
    }
}

const filterProductsByPrice = async (req, res) => {
    const { min, max } = req.body
    try {
        const result = await Product.find({ 'details.price': { $gt: +min, $lt: +max } })
        res.send(result)
    } catch (err) {
        res.send('error while filtering')
    }
}

const updateProduct = async (req, res) => {
    const { id } = req.params
    const { body } = req
    try {
        await Product.findByIdAndUpdate(id, { $set: body })
        res.status(200).send('updated successfully')
    } catch (err) {
        res.send(err)
    }
}

module.exports = { 
    getProducts, 
    getSingleProduct, 
    createProduct, 
    deleteProduct, 
    filterProductsByPrice,
    updateProduct }