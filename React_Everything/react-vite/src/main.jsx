import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//Root created 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App /> 
    {/* this is the function name app */}
  </StrictMode>,
)
