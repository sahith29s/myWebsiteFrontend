import { Route, Routes } from "react-router-dom"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"
import Homepage from "./components/Homepage"
import Footer from "./components/Footer"

const App = () => {
  return (
    <>
      <div className="bg-red-700 flex items-center text-center text-white font-xl h-9 justify-center">Website under construction</div> 
      <Navbar />
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Homepage/>} />
      </Routes>
      <Footer/>


    </>
  )
}

export default App