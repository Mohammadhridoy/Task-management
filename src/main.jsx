import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Myroute from './routes/Myroute'
import AuthProvider from './pages/AuthProvider/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>

  
    <RouterProvider router={ Myroute}>

    </RouterProvider>
    </AuthProvider>
    
  </React.StrictMode>,
)
