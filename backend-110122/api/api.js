const request = require('request')
const axios = require('./api/node_modules/axios')
const fetch = require('./api/node_modules/node-fetch/lib')

const url = 'https://dog.ceo/api/breeds/image/random'

request({url: url}, (error,response) => {
    const data = JSON.parse(response.body)
    console.log('using request')
    console.log(data.message)
})


const axiosData = async () => {
    const axiosData = await axios.get(url)
    console.log('using axios')
    console.log(axiosData.data.message)
}

const fetchData = async () => {
    const data = await (await fetch(url)).json()
    console.log('using node-fetch')
    console.log(data.message)
}

axiosData()
fetchData()