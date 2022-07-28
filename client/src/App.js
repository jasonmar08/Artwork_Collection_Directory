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

  let navigate = useNavigate()

  ///// FUNCTIONS /////
  const handleCollectionSelect = (collection) => {
    setCollectionSelect(collection)
    navigate(`/collection/${collection._id}`)
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
            element={<Home handleCollectionSelect={handleCollectionSelect} />}
          />
          <Route
            path="/collection/:collectionId"
            element={<ArtworkList collectionSelect={collectionSelect} />}
          />
          <Route path="/share" element={<ShareArt />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
