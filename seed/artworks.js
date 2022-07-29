const db = require('../db')
const { Artwork, Collection } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const createArtwork = async () => {
  Artwork.collection.drop()

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
      image: 'https://i.postimg.cc/rmdDMrLW/ultraviolet.jpg',
      artist_name: 'Alex Cherry',
      price: '$15',
      collection_name: eyesOnWalls[0]._id
    },
    {
      piece_name: 'In Trouble, She Will',
      image: 'https://i.postimg.cc/JnJRpcLT/in-trouble-she-will.jpg',
      artist_name: 'Agnes Cecile',
      price: '$25',
      collection_name: eyesOnWalls[0]._id
    },
    {
      piece_name: 'Oltremare',
      image: 'https://i.postimg.cc/13fhWc0p/oltremare.jpg',
      artist_name: 'Agnes Cecile',
      price: '$15',
      collection_name: eyesOnWalls[0]._id
    },
    {
      piece_name: 'This Thing Called Art Is Really Dangerous',
      image:
        'https://i.postimg.cc/kXLfmQ3N/this-thing-called-art-is-really-dangerous.jpg',
      artist_name: 'Agnes Cecile',
      price: '$30',
      collection_name: eyesOnWalls[0]._id
    },
    {
      piece_name: 'Eagles Become',
      image:
        'https://imgc.artprintimages.com/img/print/alex-cherry-eagles-become_u-l-pcbdk70.jpg',
      artist_name: 'Alex Cherry',
      price: '$25',
      collection_name: eyesOnWalls[0]._id
    },
    {
      piece_name: 'Overture',
      image:
        'https://imgc.artprintimages.com/img/print/alex-cherry-overture_u-l-q1hm60k0.jpg',
      artist_name: 'Alex Cherry',
      price: '$15',
      collection_name: eyesOnWalls[0]._id
    },
    {
      piece_name: 'After the Ball',
      image: 'https://i.postimg.cc/htFbwKTp/after-the-ball.jpg',
      artist_name: 'Ramon Casas i Carbo',
      price: '$25',
      collection_name: bridgemanArt[0]._id
    },
    {
      piece_name: 'The Starry Night, June 1889',
      image: 'https://i.postimg.cc/NfXRRZST/the-starry-night.jpg',
      artist_name: 'Vincent van Gogh',
      price: '$30',
      collection_name: bridgemanArt[0]._id
    },
    {
      piece_name: 'Vogue Cover - July 1937 - Surreal Shell',
      image: 'https://i.postimg.cc/gJ56ZKKN/vogue-cover-1937.jpg',
      artist_name: 'Miguel Covarrubias',
      price: '$35',
      collection_name: vogueArt[0]._id
    },
    {
      piece_name: "Bear's Belly, Arikara Indian",
      image: 'https://i.postimg.cc/RVtDpSNZ/bears-belly-arikara-indian.jpg',
      artist_name: 'Edward S. Curtis',
      price: '$20',
      collection_name: libOfCong[0]._id
    },
    {
      piece_name: 'A Mindful Garden',
      image: 'https://i.postimg.cc/xCWPLmGy/a-mindful-garden.jpg',
      artist_name: 'Duy Huynh',
      price: '$15',
      collection_name: iconicPers[0]._id
    },
    {
      piece_name: 'Detail of Noh Mask, Kyoto, Japan',
      image: 'https://i.postimg.cc/L5tjfb82/detail-of-noh-mask.jpg',
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
