import React from 'react'
import "./App.css"
import Topbar from './Components/Topbar'
import Navbar from "./Components/Navbar"
import Banner from './Components/Banner'
import Help from './Components/Help'
import About from './Components/About'
import Feature from './Components/Feature'
import People from './Components/People'
import Volunteer from './Components/Volunteer'
import Footer from './Components/Footer'
const App = () => {
  return (
    <>
      <Topbar />
      <Navbar />
      <Banner />
      <Help />
      <About />
      <Feature />
      <People />
      <Volunteer/>
      <Footer/>
    </>

  )
}

export default App
