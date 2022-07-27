import { useEffect, useState } from 'react'
import axios from 'axios'
import CollectionList from '../components/CollectionList'
import Header from '../components/Header'

const Home = () => {
  const [collections, setCollections] = useState([])

  useEffect(() => {
    const getCollections = async () => {
      // const res = await axios.get(``)
      // setCollections(res.data.collections)
    }

    getCollections()
  }, [])

  return (
    <div>
      <h1>Your Art Gallery</h1>
      <div className="home-art"></div>
    </div>
  )
}

export default Home
