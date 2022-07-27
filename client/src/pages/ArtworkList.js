const ArtworkList = (props) => {
  return (
    <div>
      <div className="artworkCard">
        <div className="artwork-img-grid">
          <img src={props.image} alt={props.piece_name} />
        </div>
        <div className="artwork-name-grid">
          <h3>{props.name}</h3>
          <p>Artist: {props.artist_name}</p>
          <p>Price: {props.price}</p>
        </div>
      </div>
    </div>
  )
}

export default ArtworkList
