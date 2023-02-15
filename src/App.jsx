import React, { useState, useEffect } from 'react'
import {Intro, Products, Navbar, Aboutus, Achievement, TopProducts, Newsletter, Foter} from './components';
import {Home , Product, Cart} from './Pages';
import { Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ShopContextProvider } from './context/shop-context';


const App = () => {
   
  const location = useLocation();

  return (
    <div>
        <Navbar/>
      <ShopContextProvider>
    <Routes key={location.pathname} location={location} >
        <Route path="/home" element={<Home/>} />
        <Route path="/" element={<Intro/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/cart" element={<Cart/>} />

</Routes>
        <Products/>
        <TopProducts/>
        <Aboutus/>
        <Achievement/>
        <Newsletter/>
        <Foter />
        </ShopContextProvider>
    </div>
  )
}

export default App