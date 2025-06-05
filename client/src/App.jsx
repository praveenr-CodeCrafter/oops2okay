import { useState } from 'react'
import './index.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

function App() {

  return (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1"></main>
    <Footer />
  </div>
  )
}

export default App
