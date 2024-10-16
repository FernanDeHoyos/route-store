import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { AppbarComponent } from './components/AppBar.jsx'
import { ShopRoutes } from './routes/ShopRoutes.jsx'
import { store } from './store/store.js'
import { ThemeProvider, createTheme } from '@mui/material'
import { Notification } from './components/DetailsComponents/Notification.jsx'

const theme = createTheme();

ReactDOM.createRoot(document.getElementById('root')).render(
     <BrowserRouter>
     <Provider store={store}>
     <ThemeProvider theme={theme}>
     <Notification/>
    <AppbarComponent/>
    <ShopRoutes></ShopRoutes>
     </ThemeProvider>
    </Provider>
     </BrowserRouter>
)
