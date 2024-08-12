import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Qualities from './components/Qualities/Qualities'
import AboutUs from './components/About-Us/AboutUs'
import Offers from './components/Offers/Offers'
import ContactUs from './components/Contact-Us/ContactUs'

function App() {
  
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Qualities />
        <AboutUs />
        <Offers />
        <ContactUs />
      </main>
    </>
  )
}

export default App
