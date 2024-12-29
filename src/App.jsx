import { useState } from 'react'
import './App.css'

import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import Skills from './Component/Skills/Skills'
import Services from './Component/Services/Services'
import Portfolio from './Component/Portfolio/Portfolio'
import Number from './Component/Number/Number'
import Testimonal from './Component/Testimonal/Testimonal'
import Contact from './Component/Contact/Contact'
import Footer from './Component/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Services />
      <Portfolio />
      <Number />
      <Testimonal />
      <Contact />
      <Footer />
    </>
  )
}

export default App
