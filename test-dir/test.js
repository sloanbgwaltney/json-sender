const express = require('express')

const app = express()
const sender = require('../index')

app.use(express.json())

app.get('/hello', sender(200, {message: 'Hello World'}))
app.get('/empty', sender(200))

app.listen(3000, () => {
    console.log('GO')
})