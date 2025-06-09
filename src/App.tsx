import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register/Register'
import Forget from './pages/forget-password/Forget'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path='/register'element={< Register/>}/>
      <Route path='/forget' element={<Forget/>}/>
    </Routes>
    
    </BrowserRouter>
    
    </>
  )
}

export default App
