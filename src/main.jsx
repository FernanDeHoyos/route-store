import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppbarComponent } from './components/AppBar.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ShopRoutes } from './routes/ShopRoutes.jsx'
import { Provider } from 'react-redux'
import { store } from './store/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
     <BrowserRouter>
     <Provider store={store}>
    <AppbarComponent/>
    <ShopRoutes></ShopRoutes>
    </Provider>
     </BrowserRouter>
)
