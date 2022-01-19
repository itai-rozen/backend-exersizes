const Product = require('./models/model')

const addProduct = (body) => {
    console.log('entered addProduct: ',body)
    const {name, category, isActive, description, price, imagesArr, phone, discount = 0} = body
    const newProduct = new Product({
        name: name,
        category: category,
        isActive: isActive,
        details: {
            description: description,
            price: price,
            images: imagesArr,
            phone: phone,
            discount: discount
        }
    })
    return newProduct
}

const getProductById =  id =>  Product.findById(id)

module.exports = { addProduct, getProductById }