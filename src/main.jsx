import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Welcome from './Pages/Welcome.jsx'
import Home from './Pages/Home.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    
  </StrictMode>,
)
