import { useEffect, useState } from 'react'
import axios from 'axios'
import CollectionList from '../components/CollectionList'

const Home = () => {
  const [collections, setCollections] = useState([])

  useEffect(() => {
    const getCollections = async () => {
      const res = await axios.get(`http://localhost:3001/collections`)
      console.log(res)
      setCollections(res.data.collections)
    }

    getCollections()
  }, [])

  return (
    <div>
      <h1>Your Art Gallery</h1>
      <div className="home-collections">
        {collections?.map((collection, index) => (
          <div key={index}>
            // DOES THIS NEED TO BE THE SAME AS THE SECOND PARAMETER?
            <CollectionList
              collection_image={collection.collection_image}
              collection_name={collection.collection_name}
              collection_size={collection.collection_size}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
