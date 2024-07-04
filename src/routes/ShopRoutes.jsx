import React from 'react'
import { DetailsProduct } from '../pages/DetailsProduct'
import { Route, Routes } from 'react-router-dom'
import { App } from '../App'


export const ShopRoutes = () => {
  return (
    
    <Routes>
        <Route path="/*" element={<App />} />
        <Route path="/product/:productId" element={<DetailsProduct />} />
   </Routes>
  )
}

