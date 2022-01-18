const mongoose = require('mongoose')
const Product = require('./model')
const url = 'mongodb://localhost:27017/productsDb'

mongoose.connect(url)
console.log('connected successfully')

const prod1 = new Product({
    name: 'Ritai',
    category: 'rubber duckies',
    isActive: true,
    details: {
        description: 'description!!!!',
        price: 50,
        discount: 20,
        images: ['asd.asd','sd.sd'],
        phone: '0506819761'
    }
}) 


prod1.save().then(() => {
   return console.log(prod1)
}).catch(err => {
    return console.log(err)
})

