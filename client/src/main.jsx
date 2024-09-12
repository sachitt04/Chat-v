import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
 import {CssBaseLIne} from "@mui/material"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CssBaseLIne />
    <App />
  </StrictMode>,
)
