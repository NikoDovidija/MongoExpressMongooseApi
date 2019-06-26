const express = require('express')
const app = express()
const mongoose = require('mongoose')
const product = require('./routes/productRoutes')
const bodyParser = require('body-parser')

// spremenljivke za lokalno mongodb
const server = 'localhost:27017'
const database = 'products'
// port za express streznik
const PORT = 3000

// povezava z lokalnim mongodb
mongoose.set('useCreateIndex', true)
mongoose.connect(`mongodb://${server}/${database}`, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// V zbirko dodamo testne produkte
const seeder = require('./db/seed')
seeder.seedDb()

//
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// dolocimo express router za produkte
app.use('/', product)

// zazenemo streznik
app.listen(PORT, () => {
  console.log(`Server is running. Endpoints available on address: http://localhost:${PORT}/`)
})
