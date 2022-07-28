import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const ArtworkList = (props) => {
  const [artworks, setArtworks] = useState([])

  let { collectionId } = useParams()

  useEffect(() => {
    const getArtworks = async () => {
      const res = await axios.get(
        `http://localhost:3001/artworks/${collectionId}`
      )
      setArtworks(res.data.artworks)
    }
    getArtworks()
  }, [])

  return (
    <div>
      <h1>The (Collection Name Here) Collection</h1>
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
              <button>Edit Info</button>
              <button>Remove Artwork</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ArtworkList
