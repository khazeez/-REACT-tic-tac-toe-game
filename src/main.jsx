import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Square from './App.jsx'
import Board from './App.jsx'
import Clock from './App.jsx'

createRoot(document.getElementById('root')).render(
   <StrictMode>
   <Board />
 </StrictMode>
   
)
