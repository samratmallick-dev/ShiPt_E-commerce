import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
      createHashRouter,
      createRoutesFromElements,
      Route,
      RouterProvider
} from 'react-router-dom'

import Shop from './Pages/Shop.jsx'
import ShopCategory from './Pages/ShopCategory.jsx'
import Product from './Pages/Product.jsx'
import Login from './Pages/Login.jsx'
import Cart from './Pages/Cart.jsx'
import Signup from './Pages/Signup.jsx'

import banner_men from './Components/Assets/banner_mens.png'
import banner_women from './Components/Assets/banner_women.png'
import banner_kid from './Components/Assets/banner_kids.png'

const router = createHashRouter(
      createRoutesFromElements(
            <Route path="/" element={<App />}>
                  <Route index element={<Shop />} />
                  <Route path="mens" element={<ShopCategory category="men" banner={banner_men} />} />
                  <Route path="womens" element={<ShopCategory category="women" banner={banner_women} />} />
                  <Route path="kids" element={<ShopCategory category="kid" banner={banner_kid} />} />
                  <Route path="product/:productId" element={<Product />} />
                  <Route path="login" element={<Login />} />
                  <Route path="signup" element={<Signup />} />
                  <Route path="cart" element={<Cart />} />
            </Route>
      )
)

ReactDOM.createRoot(document.getElementById('root')).render(
      <RouterProvider router={router} />
)
