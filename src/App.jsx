import React from "react"
import Navbar from "./Navbar/Navbar"
import Home from "./Pages/Home"
import Footer from "./Footer/Footer"
import Product from "./Pages/Product"
import Checkout from "./Pages/Checkout"
import LoginSignup from "./Pages/LoginSignup"

function App() {


  return (
    <>
      <Navbar></Navbar>
      <LoginSignup />
      <Footer></Footer>
    </>
  )
}

export default App
