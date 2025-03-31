import React from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import About from './About'
import Service from './Service'
import Contact from './Contact'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <header>
        <Nav />
      </header>

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/service' element={<Service />} />

      </Routes>

    </>

  )
}

export default App
