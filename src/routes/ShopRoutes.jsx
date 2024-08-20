import { Route, Routes } from 'react-router-dom'
import { App } from '../App'
import { DetailsProduct } from '../pages/DetailsProduct'
import { DetailsCart } from '../pages/DetailsCart'
import { DatesShoping } from '../pages/DatesShoping'
import { Categorys } from '../components/Categorys'
import { ContentProducts } from '../components/ContentProducts'
import { CategoryFilter } from '../pages/CategoryFilter'


export const ShopRoutes = () => {
  return (
    
    <Routes>
        <Route path="/*" element={<App />} />
        <Route path="/product/:type/:productId" element={<DetailsProduct />} />
        <Route path="/cart" element={<DetailsCart />} />
        <Route path="/cart/addres" element={<DatesShoping />} />
        <Route path="/category/:name/:type?" element={<CategoryFilter />} />
   </Routes>
  )
}

