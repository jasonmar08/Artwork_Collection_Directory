const db = require('../db')
const { Collection } = require('../models')
const { Artwork } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  Collection.collection.drop()

  const collections = [
    {
      collection_name: 'Eyes on Walls',
      collection_image: 'https://i.postimg.cc/Gtb83rsk/cllctn-eyes-on-walls.jpg'
      // collection_size: `${Artwork.get(0).size()}`
    },
    {
      collection_name: 'Bridgeman Art',
      collection_image: 'https://i.postimg.cc/Zn1rTX4Z/cllctn-bridgeman-art.jpg'
      // collection_size: `${Artwork.length}`
    },
    {
      collection_name: 'Vogue Art',
      collection_image: 'https://i.postimg.cc/KYH7q1wR/cllctn-vogue-art.jpg'
      // collection_size: `${Artwork.length}`
    },
    {
      collection_name: 'Library of Congress',
      collection_image:
        'https://i.postimg.cc/WpMrrYND/cllctn-library-of-congress.jpg'
      // collection_size: `${Artwork.length}`
    },
    {
      collection_name: 'Iconic Personalities',
      collection_image:
        'https://i.postimg.cc/9X82xCFs/cllctn-iconic-personalities.jpg'
      // collection_size: `${Artwork.length}`
    },
    {
      collection_name: 'Lonely Planet',
      collection_image: 'https://i.postimg.cc/jdwpZf1J/cllctn-lonely-planet.jpg'
      // collection_size: `${Artwork.length}`
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
