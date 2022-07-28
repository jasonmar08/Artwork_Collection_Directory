import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const ShareArt = (props) => {
  const [collectionName, setCollectionName] = useState('')

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
              className="formField"
              id="collectionName"
              placeholder="Collection Name"
            ></input>
            <label>Collection Cover Image:</label>
            <input
              className="formField"
              id="collectionImage"
              placeholder="Image URL"
            ></input>
          </form>
          <section className="subButts">
            <button type="submit" className="submitButtons">
              Submit Collection!
            </button>
          </section>
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
              className="formField"
              id="artistName"
              placeholder="Artist Name"
            ></input>
            <label>Artwork Name:</label>
            <input
              className="formField"
              id="pieceName"
              placeholder="Artwork Name"
            ></input>
            <labe>Artwork Price:</labe>
            <input
              className="formField"
              id="price"
              placeholder="Artwork Price"
            ></input>
            <label>Artwork Image:</label>
            <input
              className="formField"
              id="pieceImage"
              placeholder="Image URL"
            ></input>
          </form>
          <section className="subButts">
            <button type="submit" className="submitButtons">
              Submit Artwork!
            </button>
          </section>
        </div>
      </div>
    </div>
  )
}

export default ShareArt
