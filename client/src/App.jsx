import { useState } from 'react'
import './index.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import MainComponent from './components/MainComponent.jsx'

function App() {

  return (
  <div className="flex flex-col min-h-screen bg-[var(--color-bg)]">
    <Header />
    <MainComponent />
    <Footer />
  </div>
  )
}

export default App
