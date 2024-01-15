import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import './index.css'
import Home from './Pages/Home.jsx'
import Product from './Pages/Product.jsx'
import Checkout from './Pages/Checkout.jsx'
import LoginSignup from './Pages/LoginSignup.jsx'

const router = createBrowserRouter([
  {
    path:'',
    element:<App />,
    children:[
      {
        path:'/',
        element:<Home />
      },
      {
        path:'/product/',
        element:<Product />
      },
      {
        path:'/checkout',
        element:<Checkout />
      },
      {
        path:'/login',
        element:<LoginSignup />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
