const { model } = require('mongoose')
const ArtworkSchema = require('./artwork')
const CollectionSchema = require('./collection')

const Artwork = model('Artwork', ArtworkSchema)
const Collection = model('Collection', CollectionSchema)

module.exports = {
  Artwork,
  Collection
}
