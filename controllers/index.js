const { Collection, Artwork } = require('../models')

const getAllCollections = async (req, res) => {
  try {
    const collections = await Collection.find({})
    return res.status(200).json({ collections })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getSelectedCollection = async (req, res) => {
  try {
    const { id } = req.params
    const collection = await Collection.find({ _id: id })
    return res.status(200).json({ collection })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getAllArtworks = async (req, res) => {
  try {
    const artworks = await Artwork.find({})
    return res.status(200).json({ artworks })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getAllArtworksByCollection = async (req, res) => {
  console.log(req.params.id)
  try {
    const artworks = await Artwork.find({
      collection_name: req.params.id
    })
    console.log(artworks)
    return res.status(200).json({ artworks })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const postNewArtwork = async (req, res) => {
  try {
    const artwork = await new Artwork(req.body)
    await artwork.save()
    return res.status(200).json({ artwork })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const postNewCollection = async (req, res) => {
  try {
    const collection = await new Collection(req.body)
    await collection.save()
    return res.status(200).json({ collection })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllCollections,
  getSelectedCollection,
  getAllArtworks,
  getAllArtworksByCollection,
  postNewArtwork,
  postNewCollection
}
