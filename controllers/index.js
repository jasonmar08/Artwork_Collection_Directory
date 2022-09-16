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

const getOneArtwork = async (req, res) => {
  try {
    const artwork = await Artwork.find({
      _id: req.params.id
    })
    console.log(artwork)
    return res.status(200).json({ artwork })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const postNewArtworkByCollection = async (req, res) => {
  try {
    let collection = await Collection.findById(req.params.id)
    let artworkBody = { ...req.body, collection_name: collection._id }
    let newArtwork = await Artwork.create(artworkBody)
    return res.status(200).send(newArtwork)
    // return res.status(200).json({ artworkBody })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const findCollectionByIdAndDelete = async (req, res) => {
  try {
    let deleted = await Collection.findByIdAndDelete(req.params.id)
    if (deleted) {
      return res.status(200).send('Collection Deleted!')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const findArtworkByIdAndDelete = async (req, res) => {
  try {
    let deleted = await Artwork.findByIdAndDelete(req.params.id)
    if (deleted) {
      return res.status(200).send('Artwork Deleted!')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const findArtworkByIdAndUpdate = async (req, res) => {
  try {
    let updated = await Artwork.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    if (updated) {
      return res.status(200).send('An artwork was updated!')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const postNewCollection = async (req, res) => {
  try {
    const collection = await Collection.create(req.body)
    return res.status(200).send({ collection })
  } catch (error) {
    console.log(error)
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllCollections,
  getSelectedCollection,
  getOneArtwork,
  getAllArtworks,
  findArtworkByIdAndUpdate,
  getAllArtworksByCollection,
  postNewArtworkByCollection,
  findCollectionByIdAndDelete,
  findArtworkByIdAndDelete,
  postNewCollection
}
