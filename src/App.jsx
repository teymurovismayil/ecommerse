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
import Basket from './Pages/Basket'
import Privacy from './Pages/Privacy'
import Exchanges from './Pages/Exchanges'
import Shipping from './Pages/Shipping'
import Conditions from './Pages/Conditions'
import Faq from './Pages/Faq'
import Compare from './Pages/Compare'
import Wishlist from './Pages/Wishlist'
import AdminPanel from './Pages/AdminPanel'
import Dress from './Pages/Dress'
import Jacket from './Pages/Jacket'
import Trousers from './Pages/Trousers'



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
          <Route  element={<Profile />} path='/profile/' />
          <Route  element={<Signin />} path='/signin' />
          <Route  element={<Basket />} path='/basket' />
          <Route  element={<Privacy />} path='/privacy' />
          <Route  element={<Exchanges />} path='/Exchanges' />
          <Route  element={<Shipping />} path='/Shipping' />
          <Route  element={<Conditions />} path='/Conditions' />
          <Route  element={<Faq />} path='/faq' />
          <Route  element={<Compare />} path='/Compare' />
          <Route  element={<Wishlist />} path='/Wishlist' />
          <Route  element={<AdminPanel />} path='/adminpanel123' />
          <Route  element={<Dress />} path='/dress' />
          <Route  element={<Jacket />} path='/jacket' />
          <Route  element={<Trousers />} path='/trousers' />
        </Route>
      </Routes>

    </>
  )
}

export default App
