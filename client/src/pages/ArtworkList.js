import { useEffect, useState } from 'react'
import axios from 'axios'

const ArtworkList = (props) => {
  const [artworks, setArtworks] = useState([])

  useEffect(() => {
    const getArtworks = async () => {
      const res = await axios.get(`http://localhost:3001/artworks`)
      console.log(res)
      setArtworks(res.data.artworks)
    }
    getArtworks()
  }, [])

  return (
    <div>
      <h1>The (Collection Name Here) Collection</h1>
      {artworks?.map((artwork, index) => (
        <div className="artworkCard" key={index}>
          <div className="artwork-img-grid">
            <img src={artwork.image} alt={artwork.piece_name} />
          </div>
          <div className="artwork-name-grid">
            <h4>{artwork.piece_name}</h4>
            <p>Artist: {artwork.artist_name}</p>
            <p>Price: {artwork.price}</p>
          </div>
          <div className="buttons">
            <button>Remove This Artwork</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ArtworkList
