import { Route, Routes } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import CollectionPage from './pages/CollectionPage'
import CollectionList from './components/CollectionList'
import { useState } from 'react'

const App = () => {
  ////////
  ///// STATE /////
  const [collectionSelect, setCollectionSelect] = useState('')

  let navigate = useNavigate()

  ////////
  ///// FUNCTIONS /////
  const handleCollectionSelect = (collection) => {
    setCollectionSelect(collection)
    // navigate()
  }

  ////////
  ///// DISPLAY RETURNS /////
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
