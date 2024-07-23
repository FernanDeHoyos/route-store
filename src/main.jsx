import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { AppbarComponent } from './components/AppBar.jsx'
import { ShopRoutes } from './routes/ShopRoutes.jsx'
import { store } from './store/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
     <BrowserRouter>
     <Provider store={store}>
    <AppbarComponent/>
    <ShopRoutes></ShopRoutes>
    </Provider>
     </BrowserRouter>
)
