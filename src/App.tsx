import { Route, Routes } from "react-router-dom"
import Contact from "./components/pages/Contact"
import Navbar from "./justComponents/Navbar"
import Homepage from "./components/pages/Homepage"
import Footer from "./justComponents/Footer"
import AboutUs from "./components/pages/About"
import Chat from "./components/pages/Chat"
import Pagenotfound from "./components/pages/Pagenotfound"
import Signup from "./auth/Signup"
import Login from "./auth/Login"

const App = () => {
  return (
    <>
      <div className="bg-red-700 flex items-center text-center text-white font-xl h-9 justify-center">Website under construction</div>
      <Navbar />
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<Pagenotfound />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />


    </>
  )
}

export default App