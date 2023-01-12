const mongoose = require('mongoose')
require('dotenv').config()

let dbUrl =
  process.env.NODE_ENV === 'production'
    ? process.env.MONGODB_URI
    : process.env.MONGODB_LOCAL

mongoose
  .connect(dbUrl)
  .then(() => {
    console.log('Successfully connected to MongoDB!')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })
mongoose.set('debug', true)
const db = mongoose.connection

module.exports = db
