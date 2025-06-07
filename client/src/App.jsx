import { useState } from 'react'
import './index.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import MainComponent from './components/MainComponent.jsx'
import HowItWorksSection from './components/HowItWorksSection.jsx'
import GithubPopup from './components/GithubPopup.jsx'

function App() {

  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-bg)]">
      <Header />
      <div className="flex-1 flex flex-col">
        <MainComponent />
        <HowItWorksSection />
      </div>
      <Footer />
      <GithubPopup />
    </div>
  )
}

export default App
