import { useState } from 'react'
import './App.css'
import './App.scss'
import Layout from './Componentss/Layout'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Outwear from './Pages/Outwear'
import ProductsSale from './Pages/ProductsSale'
import Register from './Pages/Auth/SignUp/Register'
import Profile from './Pages/Profile'
import TrendingProductSale from './Pages/TrendingProductSale'
import Signin from './Pages/Auth/SignIn/Signin'



function App() {

  
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route  element={<Outwear />} path='/outwear' />
          <Route  element={<ProductsSale />} path='/productsSale/:id' />
          <Route  element={<TrendingProductSale />} path='/trendingProductSale/:id' />
          <Route  element={<Register />} path='/register' />
          <Route  element={<Profile />} path='/profile' />
          <Route  element={<Signin />} path='/signin' />
        </Route>
      </Routes>

    </>
  )
}

export default App
