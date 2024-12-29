import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header/Header'
import Hero from './Hero/Hero'
import About from './About/About'
import Skills from './Skills/Skills'


function App() {
 

  return (
   <>
     <Header />
     <Hero />
     <About />
     <Skills />
   </>
  )
}

export default App
