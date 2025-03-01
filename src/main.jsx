import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './components/Homepage.jsx'
import Form from './components/Form.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/' element={<Homepage />} />
          <Route path='/home' element={<Homepage />} />
          <Route path='/form' element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
)
