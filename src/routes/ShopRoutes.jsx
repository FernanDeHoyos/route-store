import React from 'react'
import { DetailsProduct } from '../pages/DetailsProduct'
import { Route, Routes } from 'react-router-dom'
import { App } from '../App'
import { DetailsCart } from '../pages/DetailsCart'
import { DatesShoping } from '../pages/DatesShoping'


export const ShopRoutes = () => {
  return (
    
    <Routes>
        <Route path="/*" element={<App />} />
        <Route path="/product/:productId" element={<DetailsProduct />} />
        <Route path="/cart" element={<DetailsCart />} />
        <Route path="/cart/addres" element={<DatesShoping />} />
   </Routes>
  )
}

