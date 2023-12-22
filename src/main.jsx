import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Myroute from './routes/Myroute'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ Myroute}>

    </RouterProvider>
    
  </React.StrictMode>,
)
