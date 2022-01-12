const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())
const PORT = 5000
const numbers = [1,2,3,4,5,6]
app.get('/numbers', (req,res) => {
    res.send(numbers)
})

app.post('/numbers/:newNum', (req,res) => {
    const { newNum } = req.params
    req.body = +newNum
    if (numbers.includes(req.body)){
        res.sendStatus(400)
    } else {
        numbers.push(req.body)
        res.send(numbers) 
    }
})

app.delete('/numbers/:num', (req,res) => {
    const { num } = req.params
    const numIdx = numbers.findIndex(number => number === +num )
    if (numIdx === -1){
        res.sendStatus(400)
    } else {
        numbers.splice(numIdx,1)
        res.send(numbers)
    }
})

app.put('/numbers/', (req,res) => {
    const { num } = req.query
    const { newNum } = req.query
    const numIdx = numbers.findIndex(number => number === +num )
    if (numIdx === -1){
        res.sendStatus(400)
    } else {
        numbers[numIdx] = +newNum
        res.send(numbers)
    }
})

app.listen(PORT, () => console.log(`running on port ${PORT}`))