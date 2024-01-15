import React from "react"
import Navbar from "./Navbar/Navbar"
import Home from "./Pages/Home"
import Footer from "./Footer/Footer"
import Product from "./Pages/Product"
import Checkout from "./Pages/Checkout"
import LoginSignup from "./Pages/LoginSignup"
import {Outlet} from 'react-router-dom'

function App() {


  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
