import './App.css'
import db from './db/db.json'
import { useState } from 'react'
import ContainerInfo from './components/ContainerInfo'

const images = ["bg1", "bg2", "bg3", "bg4"]

function App() {

  const getRandomPhrase = (listPhrase) => {
    const randomPhrase = Math.floor (Math.random() * listPhrase.length)
    return listPhrase[randomPhrase]
  }

  const [quote, setQuote] = useState(getRandomPhrase(db))
  const [bgImage, setBgImage] = useState(getRandomPhrase(images))

  const handleNewQuote = () => {
    setQuote(getRandomPhrase(db))
    setBgImage(getRandomPhrase(images))
  }

  return (
    <div className={`App ${bgImage}`}>

      <ContainerInfo quote={quote} handleNewQuote={handleNewQuote} />
      
    </div>
  )
}

export default App
