import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const ArtworkList = ({
  collections,
  collectionSelect,
  setCollections,
  handleArtworkUpdateSelect
}) => {
  const [artworks, setArtworks] = useState([])
  let navigate = useNavigate()
  let { collectionId, index } = useParams()

  useEffect(() => {
    const getArtworks = async () => {
      const res = await axios.get(`/artworks/${collectionId}`)
      setArtworks(res.data.artworks)
    }
    getArtworks()
  }, [])

  const handleClickDeleteCollection = async () => {
    await axios.delete(`/collection/${collectionId}`)
    const updateState = () => {
      let tempArray = collections
      tempArray.splice(index, 1)
      setCollections(tempArray)
    }
    await updateState()
    navigate('/')
  }

  return (
    <div>
      <h1>
        The "<em>{`${collectionSelect.collection_name}`}</em>" Collection
      </h1>
      <div className="removeCollection">
        <button onClick={handleClickDeleteCollection} className="removeButton">
          Delete Collection
        </button>
      </div>
      <div className="artworks-grid">
        {artworks?.map((artwork, index) => (
          <div className="artworkCard" key={index}>
            <div className="artwork-img-grid">
              <img src={artwork.image} alt={artwork.piece_name} />
            </div>
            <div className="artwork-name-grid">
              <h4>{artwork.piece_name}</h4>
              <p>
                <span>
                  <strong>Artist:</strong> {artwork.artist_name}
                </span>
              </p>
              <p>
                <span>
                  <strong>Price:</strong> {artwork.price}
                </span>
              </p>
            </div>
            <div className="buttons">
              <button
                onClick={() => handleArtworkUpdateSelect(collectionId, artwork)}
                className="artworkListButtons"
              >
                Edit Info
              </button>
              <button className="artworkListButtons">Remove Artwork</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ArtworkList
