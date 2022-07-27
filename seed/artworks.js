const db = require('../db')
const { Artwork, Collection } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const createArtwork = async () => {
  const eyesOnWalls = await Collection.find({
    collection_name: 'Eyes on Walls'
  })
  console.log(eyesOnWalls)
  const bridgemanArt = await Collection.find({
    collection_name: 'Bridgeman Art'
  })
  const vogueArt = await Collection.find({ collection_name: 'Vogue Art' })
  const libOfCong = await Collection.find({
    collection_name: 'Library of Congress'
  })
  const iconicPers = await Collection.find({
    collection_name: 'Iconic Personalities'
  })
  const lonelyPlanet = await Collection.find({
    collection_name: 'Lonely Planet'
  })

  const artworks = [
    {
      piece_name: 'Ultraviolet',
      artist_name: 'Alex Cherry',
      price: '$15',
      collection_name: eyesOnWalls[0]._id
      // review: [{ rating: '', artId: '' }]
    },
    {
      piece_name: 'In Trouble, She Will',
      artist_name: 'Agnes Cecile',
      price: '$25',
      collection_name: eyesOnWalls[0]._id
    },
    {
      piece_name: 'Oltremare',
      artist_name: 'Agnes Cecile',
      price: '$15',
      collection_name: eyesOnWalls[0]._id
    },
    {
      piece_name: 'This Thing Called Art Is Really Dangerous',
      artist_name: 'Agnes Cecile',
      price: '$30',
      collection_name: eyesOnWalls[0]._id
    },
    {
      piece_name: 'After the Ball',
      artist_name: 'Ramon Casas i Carbo',
      price: '$25',
      collection_name: bridgemanArt[0]._id
    },
    {
      piece_name: 'The Starry Night, June 1889',
      artist_name: 'Vincent van Gogh',
      price: '$30',
      collection_name: bridgemanArt[0]._id
    },
    {
      piece_name: 'Vogue Cover - July 1937 - Surreal Shell',
      artist_name: 'Miguel Covarrubias',
      price: '$35',
      collection_name: vogueArt[0]._id
    },
    {
      piece_name: "Bear's Belly, Arikara Indian",
      artist_name: 'Edward S. Curtis',
      price: '$20',
      collection_name: libOfCong[0]._id
    },
    {
      piece_name: 'A Mindful Garden',
      artist_name: 'Duy Huynh',
      price: '$15',
      collection_name: iconicPers[0]._id
    },
    {
      piece_name: 'Detail of Noh Mask, Kyoto, Japan',
      artist_name: 'Frank Carter',
      price: '$20',
      collection_name: lonelyPlanet[0]._id
    }
  ]
  await Artwork.insertMany(artworks)
}
const run = async () => {
  await createArtwork()
  db.close()
}

run()
