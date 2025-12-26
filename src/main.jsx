import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router"
import AppRoutes from './Routes/AppRoutes'


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter>
    <AppRoutes></AppRoutes>
    </BrowserRouter>
  
  </StrictMode>,
)
