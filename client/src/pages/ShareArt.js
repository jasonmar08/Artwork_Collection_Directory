import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const ShareArt = (props) => {
  return (
    <div>
      <h1>Share Your Talent Below!</h1>
      <div className="newCollectionForm">
        <h4>Add A New Collection:</h4>
        <section className="shareForm">
          <div className="formTxt">
            <input
              className="formField"
              id="collectionName"
              placeholder="New Collection Name"
            ></input>
            <input
              className="formField"
              id="collectionImage"
              placeholder="Thumbnail Image URL"
            ></input>
          </div>
        </section>
        <button type="submit" className="collectionSubmit">
          Submit Collection!
        </button>
      </div>
      <hr></hr>
      <h3>- OR -</h3>
      <div className="newArtworkForm">
        <h4>Add To An Existing Collection:</h4>
        <section className="shareForm">
          <div className="formTxt">
            <input
              className="formField"
              id="artistName"
              placeholder="Artist Name"
            ></input>
            <input
              className="formField"
              id="pieceName"
              placeholder="Artwork Name"
            ></input>
            <input
              className="formField"
              id="price"
              placeholder="Artwork Price"
            ></input>
            <input
              className="formField"
              id="pieceImage"
              placeholder="Image URL"
            ></input>
          </div>
        </section>
        <button type="submit" className="artworkSubmit">
          Submit Artwork!
        </button>
      </div>
    </div>
  )
}

export default ShareArt
