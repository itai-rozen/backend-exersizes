const express = require('express')
const dotenv = require('dotenv').config()
const mongoose = require('mongoose')
const productRoutes = require('./routes/productRoutes')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


const PORT = process.env.PORT
const url = `mongodb+srv://itai_rozen:${process.env.PASSWORD}@cluster0.sihrb.mongodb.net/productsDb?retryWrites=true&w=majority`

app.use('/', productRoutes)


mongoose.connect(url, () => {
    console.log('connected to mongo')
})


app.listen(PORT, () => {
    console.log('listening on port ', PORT)
})

