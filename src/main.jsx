import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'
import { AppbarComponent } from './components/AppBar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppbarComponent/>
    <App />
  </React.StrictMode>,
)
