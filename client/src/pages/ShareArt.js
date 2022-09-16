import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ShareArt = () => {
  let navigate = useNavigate()
  const initialState = {
    collection_name: '',
    collection_image: ''
  }
  const [formState, setFormState] = useState(initialState)
  const [collections, setCollections] = useState([])

  useEffect(() => {
    const getCollectionsListDropdown = async () => {
      const res = await axios.get('/collections')
      setCollections(res.data.collections)
    }
    console.log('COLLECTIONS', collections)
    getCollectionsListDropdown()
  }, [])

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
  }

  const handleSubmitCollection = async (e) => {
    e.preventDefault()
    const res = await axios.post('/collections', formState)
    console.log(res)
    setFormState(initialState)
    navigate('/')
  }

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
              <button type="submit" className="submitButtons">
                Submit Collection!
              </button>
            </section>
          </form>
        </div>
        <div className="newArtworkForm">
          <h4>Add To An Existing Collection:</h4>
          <form className="artworkInputs">
            <label>Select Collection:</label>
            <select className="chooseCollection">
              {collections?.map((collection) => (
                <option key={collection._id}>
                  {collection.collection_name}
                </option>
              ))}
              {/* <option value="Eyes on Walls">Eyes on Walls</option>
              <option value="Bridgeman Art">Bridgeman Art</option>
              <option value="Vogue Art">Vogue Art</option>
              <option value="Library of Congress">Library of Congress</option>
              <option value="Iconic Personalities">Iconic Personalities</option>
              <option value="Lonely Planet">Lonely Planet</option> */}
            </select>
            <label>Artist Name:</label>
            <input type="text" required placeholder="Artist Name"></input>
            <label>Artwork Name:</label>
            <input type="text" required placeholder="Artwork Name"></input>
            <label>Artwork Price:</label>
            <input type="text" required placeholder="Artwork Price"></input>
            <label>Artwork Image:</label>
            <input type="text" required placeholder="Image URL"></input>
            <section className="subButts">
              <button className="submitButtons">Submit Artwork!</button>
            </section>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ShareArt
