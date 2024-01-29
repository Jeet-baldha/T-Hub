import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import './index.css'
import Home from './Pages/Home.jsx'
import Product from './Pages/Product.jsx'
import Checkout from './Pages/Checkout.jsx'
import LoginSignup from './Pages/LoginSignup.jsx'
import Category from './Pages/Category.jsx'
import Cart from './Pages/Cart.jsx'
import store from './store/store.js'
import {Provider} from 'react-redux'

const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/product/:id',
        element: <Product />
      },
      {
        path: '/checkout',
        element: <Checkout />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/login',
        element: <LoginSignup />
      },
      {
        path: '/category/:category',
        element: <Category />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>,
)
