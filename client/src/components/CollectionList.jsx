const CollectionList = (props) => {

  return (
    <div>
      <div className="collection-grid">
        <div className="img-container">
          <img src={props.collection_image} alt={props.collection_name} />
        </div>
        <div className="name-container">
          <h2>{props.collection_name}</h2>
          <p>Size: {props.collection_size} pieces</p>
        </div>
      </div>
    </div>
  )
}

export default CollectionList