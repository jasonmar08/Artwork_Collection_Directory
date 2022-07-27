const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is the root page!'))

router.get('/collections', controllers.getAllCollections)

router.get('/collection/:id', controllers.getSelectedCollection)

router.post('/collections', controllers.postNewCollection)

router.get('/artworks', controllers.getAllArtworks)

router.post('/artworks', controllers.postNewArtwork)

module.exports = router
