import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ShareArt = ({ collections, setCollections }) => {
  // const [existingCollection, setExistingCollection] = useState('')
  const [artist_name, setArtistName] = useState('')
  const [piece_name, setArtworkName] = useState('')
  const [price, setArtworkPrice] = useState('')
  const [image, setArtworkImage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  let navigate = useNavigate()
  const initialState = {
    collection_name: '',
    collection_image: ''
  }
  const [formState, setFormState] = useState(initialState)

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
  }

  const handleSubmitCollection = async (e) => {
    e.preventDefault()
    const res = await axios.post('http://localhost:3001/collections', formState)
    console.log(res)
    setFormState(initialState)
    navigate('/')
  }

  // const useHandleArtworkSubmit = (e) => {
  //   e.preventDefault()
  //   const newArtwork = {
  //     piece_name,
  //     image,
  //     artist_name,
  //     price,
  //     collection_name
  //   }

  //   let { collectionId } = useParams()

  //   setIsLoading(true)

  //   fetch(`http://localhost:3001/artworks/${collectionId}`, {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(newArtwork)
  //   }).then(() => {
  //     console.log('New Artwork Added!')
  //     setIsLoading(false)
  //   })
  // }

  return (
    <div>
      <h1>Share Your Talent Below!</h1>
      <div className="submissionForms">
        <div className="newCollectionForm">
          <h4>Add A New Collection:</h4>
          <form onSubmit={handleSubmitCollection} className="collectionInputs">
            <label>New Collection Name:</label>
            <input
              type="text"
              required
              id="collection_name"
              onChange={handleChange}
              value={formState.collection_name}
              placeholder="Collection Name"
            ></input>
            <label>Collection Cover Image:</label>
            <input
              type="text"
              required
              id="collection_image"
              onChange={handleChange}
              value={formState.collection_image}
              placeholder="Image URL"
            ></input>
            <section className="subButts">
              {!isLoading && (
                <button type="submit" className="submitButtons">
                  Submit Collection!
                </button>
              )}
              {isLoading && (
                <button type="submit" className="submitButtons">
                  Adding Collection...
                </button>
              )}
            </section>
          </form>
        </div>
        <div className="newArtworkForm">
          <h4>Add To An Existing Collection:</h4>
          <form className="artworkInputs">
            <label>Select Collection:</label>
            <select className="chooseCollection">
              <option value="Eyes on Walls">Eyes on Walls</option>
              <option value="Bridgeman Art">Bridgeman Art</option>
              <option value="Vogue Art">Vogue Art</option>
              <option value="Library of Congress">Library of Congress</option>
              <option value="Iconic Personalities">Iconic Personalities</option>
              <option value="Lonely Planet">Lonely Planet</option>
            </select>
            <label>Artist Name:</label>
            <input
              type="text"
              required
              value={artist_name}
              onChange={(e) => setArtistName(e.target.value)}
              placeholder="Artist Name"
            ></input>
            <label>Artwork Name:</label>
            <input
              type="text"
              required
              value={piece_name}
              onChange={(e) => setArtworkName(e.target.value)}
              placeholder="Artwork Name"
            ></input>
            <label>Artwork Price:</label>
            <input
              type="text"
              required
              value={price}
              onChange={(e) => setArtworkPrice(e.target.value)}
              placeholder="Artwork Price"
            ></input>
            <label>Artwork Image:</label>
            <input
              type="text"
              required
              value={image}
              onChange={(e) => setArtworkImage(e.target.value)}
              placeholder="Image URL"
            ></input>
            <section className="subButts">
              {!isLoading && (
                <button className="submitButtons">Submit Artwork!</button>
              )}
              {isLoading && (
                <button className="submitButtons">Adding Artwork...</button>
              )}
            </section>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ShareArt
