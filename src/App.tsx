import { Route, Routes } from "react-router-dom"
import React from "react"
import Contact from "./components/Contact"

import Navbar from "./components/Navbar"
import Body from "./components/Homepage"

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>

        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Body />} />
      </Routes>


    </>
  )
}

export default App