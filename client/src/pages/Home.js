import { useEffect } from 'react'
import axios from 'axios'
import CollectionList from '../components/CollectionList'

const Home = ({ handleCollectionSelect, collections, setCollections }) => {
  useEffect(() => {
    const getCollections = async () => {
      const res = await axios.get(`http://localhost:3001/collections`)
      console.log('Home Mounted')
      setCollections(res.data.collections)
      console.log(res.data.collections)
    }
    getCollections()
  }, [])

  return (
    <div>
      <h2>Collections:</h2>
      <div className="home-collections">
        {collections?.map((collection, index) => (
          <div key={collection.collection_image}>
            <CollectionList
              collection_image={collection.collection_image}
              collection_name={collection.collection_name}
              collection_size={collection.collection_size}
              onClick={() => handleCollectionSelect(collection, index)}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
