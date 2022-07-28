import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const ShareArt = (props) => {
  const [collectionName, setCollectionName] = useState('')
  const [collectionImage, setCollectionImage] = useState('')
  const [existingCollection, setExistingCollection] = useState('Eyes on Walls')
  const [artistName, setArtistName] = useState('')
  const [artworkName, setArtworkName] = useState('')
  const [artworkPrice, setArtworkPrice] = useState('')
  const [artworkImage, setArtworkImage] = useState('')

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   const
  // }

  return (
    <div>
      <h1>Share Your Talent Below!</h1>
      <div className="submissionForms">
        <div className="newCollectionForm">
          <h4>Add A New Collection:</h4>
          <form className="collectionInputs">
            <label>New Collection Name:</label>
            <input
              type="text"
              required
              value={collectionName}
              onChange={(e) => setCollectionName(e.target.value)}
              placeholder="Collection Name"
            ></input>
            <label>Collection Cover Image:</label>
            <input
              type="text"
              required
              value={collectionImage}
              onChange={(e) => setCollectionImage(e.target.value)}
              placeholder="Image URL"
            ></input>
          </form>
          <section className="subButts">
            <button type="submit" className="submitButtons">
              Submit Collection!
            </button>
          </section>
          {/* <p>{collectionName}</p>
          <p>{collectionImage}</p> */}
        </div>
        <div className="newArtworkForm">
          <h4>Add To An Existing Collection:</h4>
          <form className="artworkInputs">
            <label>Select Collection:</label>
            <select
              value={existingCollection}
              onChange={(e) => setExistingCollection(e.target.value)}
              className="chooseCollection"
            >
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
              value={artistName}
              onChange={(e) => setArtistName(e.target.value)}
              placeholder="Artist Name"
            ></input>
            <label>Artwork Name:</label>
            <input
              type="text"
              required
              value={artworkName}
              onChange={(e) => setArtworkName(e.target.value)}
              placeholder="Artwork Name"
            ></input>
            <labe>Artwork Price:</labe>
            <input
              type="text"
              required
              value={artworkPrice}
              onChange={(e) => setArtworkPrice(e.target.value)}
              placeholder="Artwork Price"
            ></input>
            <label>Artwork Image:</label>
            <input
              type="text"
              required
              value={artworkImage}
              onChange={(e) => setArtworkImage(e.target.value)}
              placeholder="Image URL"
            ></input>
          </form>
          <section className="subButts">
            <button type="submit" className="submitButtons">
              Submit Artwork!
            </button>
          </section>
          {/* <p>{existingCollection}</p>
          <p>{artistName}</p>
          <p>{artworkName}</p>
          <p>{artworkPrice}</p>
          <p>{artworkImage}</p> */}
        </div>
      </div>
    </div>
  )
}

export default ShareArt
