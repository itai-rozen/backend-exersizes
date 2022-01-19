const mongoose = require('mongoose')
const validator = require('validator')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    category: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean
    },
    details: {
        description: {
            type: String,
            required: true,
            validate(value){
                if (value.trim().length < 10)  throw new Error('Error - description is not valid')
            }
        },
        price: {
            type: Number,
            required: true,
            validate(value){
                if (value < 0) throw new Error('price is not valid')
            }
        },
        discount: {
            type: Number,
            default: 0
        },

        images: {
            type: [String],
            required:true,
            validate(arr){
                if (arr.length < 2) throw new Error('images are not valid');
            }
        },
        phone: {
            type: String,
            required:true,
            validate(phone){
                if (!validator.isMobilePhone(phone,'he-IL')) throw new Error('phone not valid');
            }
        },
        dateAdded: {
            type: Date,
            default: new Date(Date.now())
        }
    }
})
const Product = mongoose.model('Product', ProductSchema)
module.exports = Product