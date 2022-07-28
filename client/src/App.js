import { Route, Routes } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import ArtworkList from './pages/ArtworkList'
import ShareArt from './pages/ShareArt'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const App = () => {
  ///// STATE /////
  const [collectionSelect, setCollectionSelect] = useState('')
  const [collections, setCollections] = useState([])

  let navigate = useNavigate()

  ///// FUNCTIONS /////
  const handleCollectionSelect = (collection, index) => {
    setCollectionSelect(collection)
    navigate(`/collection/${collection._id}/${index}`)
  }

  ///// DISPLAY RETURNS /////
  return (
    <div className="App">
      <Link to="/" className="logoHeader">
        <h1>Your Art Gallery</h1>
      </Link>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                handleCollectionSelect={handleCollectionSelect}
                collections={collections}
                setCollections={setCollections}
              />
            }
          />
          <Route
            path="/collection/:collectionId/:index"
            element={
              <ArtworkList
                collectionSelect={collectionSelect}
                collections={collections}
                setCollections={setCollections}
              />
            }
          />
          <Route path="/share" element={<ShareArt />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
