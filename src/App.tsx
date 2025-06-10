import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/log-in/Login'
import Register from './pages/register/Register'
import Forget from './pages/forget-password/Forget'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path='/register'element={< Register/>}/>
      <Route path='/forget' element={<Forget/>}/>
    </Routes>
    
    </BrowserRouter>
    
    </>
  )
}

export default App
