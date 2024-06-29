require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/loginapis').then(() => {
    console.log("Connected to database")
})

const express = require('express')
const app = express()
const hbs = require('hbs')

app.set('view engine', 'hbs')
app.set('views', './views')

const port = process.env.SERVER_PORT | 3000

const userRoute = require('./routes/userRoute')
app.use('/api', userRoute)

const authRoute = require('./routes/authRoute')
app.use('/', authRoute)

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})