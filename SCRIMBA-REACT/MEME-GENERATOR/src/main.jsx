import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Meme from './components/Meme'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Meme />
  </React.StrictMode>,
)
