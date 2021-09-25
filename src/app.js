const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

app.get('/', async (req, res) => {
  res.status(200).json({ message: 'Hello world' })
})

module.exports = app
