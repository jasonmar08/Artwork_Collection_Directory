import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ShareArt = () => {
  const [collection_name, setCollectionName] = useState('')
  const [collection_image, setCollectionImage] = useState('')
  // const [existingCollection, setExistingCollection] = useState('')
  const [artist_name, setArtistName] = useState('')
  const [piece_name, setArtworkName] = useState('')
  const [price, setArtworkPrice] = useState('')
  const [image, setArtworkImage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleCollectionSubmit = (e) => {
    e.preventDefault()
    const newCollection = { collection_name, collection_image }

    setIsLoading(true)

    fetch('http://localhost:3001/collections', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newCollection)
    }).then(() => {
      console.log('New Collection Added!')
      setIsLoading(false)
    })
  }

  const useHandleArtworkSubmit = (e) => {
    e.preventDefault()
    const newArtwork = {
      piece_name,
      image,
      artist_name,
      price,
      collection_name
    }

    let { collectionId } = useParams()

    setIsLoading(true)

    fetch(`http://localhost:3001/artworks/${collectionId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newArtwork)
    }).then(() => {
      console.log('New Artwork Added!')
      setIsLoading(false)
    })
  }

  return (
    <div>
      <h1>Share Your Talent Below!</h1>
      <div className="submissionForms">
        <div className="newCollectionForm">
          <h4>Add A New Collection:</h4>
          <form onSubmit={handleCollectionSubmit} className="collectionInputs">
            <label>New Collection Name:</label>
            <input
              type="text"
              required
              value={collection_name}
              onChange={(e) => setCollectionName(e.target.value)}
              placeholder="Collection Name"
            ></input>
            <label>Collection Cover Image:</label>
            <input
              type="text"
              required
              value={collection_image}
              onChange={(e) => setCollectionImage(e.target.value)}
              placeholder="Image URL"
            ></input>
            <section className="subButts">
              {!isLoading && (
                <button className="submitButtons">Submit Collection!</button>
              )}
              {isLoading && (
                <button className="submitButtons">Adding Collection...</button>
              )}
            </section>
          </form>
          {/* <p>{collectionName}</p>
          <p>{collectionImage}</p> */}
        </div>
        <div className="newArtworkForm">
          <h4>Add To An Existing Collection:</h4>
          <form onSubmit={useHandleArtworkSubmit} className="artworkInputs">
            <label>Select Collection:</label>
            <select
              value={collection_name}
              onChange={(e) => setCollectionName(e.target.value)}
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
