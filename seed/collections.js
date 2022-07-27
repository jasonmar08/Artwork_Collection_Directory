const db = require('../db')
const { Collection } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const collections = [
    {
      collection_name: 'Eyes on Walls',
      collection_size: ''
    },
    {
      collection_name: 'Bridgeman Art',
      collection_size: ''
    },
    {
      collection_name: 'Vogue Art',
      collection_size: ''
    },
    {
      collection_name: 'Library of Congress',
      collection_size: ''
    },
    {
      collection_name: 'Iconic Personalities',
      collection_size: ''
    },
    {
      collection_name: 'Lonely Planet',
      collection_size: ''
    }
  ]
  await Collection.insertMany(collections)
  console.log('Created some art collections!')
}
const run = async () => {
  await main()
  db.close()
}

run()
