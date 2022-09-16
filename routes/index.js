const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is the root page!'))

router.get('/collections', controllers.getAllCollections)

router.get('/collection/:id', controllers.getSelectedCollection)

router.post('/collections', controllers.postNewCollection)

router.delete('/collection/:id', controllers.findCollectionByIdAndDelete)

router.delete('/artworks/:id', controllers.findArtworkByIdAndDelete)

router.get('/artworks/:id', controllers.getAllArtworksByCollection)

router.get('/artwork/:id', controllers.getOneArtwork)

router.put('/artwork/:id', controllers.findArtworkByIdAndUpdate)

router.get('/artworks', controllers.getAllArtworks)

router.post('/collection/:id/artwork', controllers.postNewArtworkByCollection)

module.exports = router
