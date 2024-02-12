/* eslint-disable no-unused-vars */
import React from "react"
import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"

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
