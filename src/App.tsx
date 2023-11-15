import { Route, Routes } from "react-router-dom"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/contact" element={<Contact />} />

      </Routes>


    </>
  )
}

export default App