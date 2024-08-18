import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Qualities from './components/Qualities/Qualities'
import AboutUs from './components/About-Us/AboutUs'
import Offers from './components/Offers/Offers'
import ContactUs from './components/Contact-Us/ContactUs'
import Footer from './components/Footer/Footer'

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
      <Footer />
    </>
  )
}

export default App
