import React from 'react'
import Home from '../pages/Home'
import Login from '../pages/user/Login'
import Register from '../pages/user/Register'
import CaptainRegister from '../pages/captain/CaptainRegister'
import CaptainLogin from '../pages/captain/CaptainLogin'
import { Route, Routes } from 'react-router-dom'

const IndexRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/register-captain' element={<CaptainRegister />} />
      <Route path='/login-captain' element={<CaptainLogin />} />
    </Routes>
  )
}

export default IndexRoutes