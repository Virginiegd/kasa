import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Error404 from './pages/Error'
import Appartment from './pages/Appartment'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        < Route exact path="/" element={<Home />} />
        < Route path="/about" element={<About />} />
        < Route path="/appartment/:id" element={<Appartment />} /> 
        < Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

