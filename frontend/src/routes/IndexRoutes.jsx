import React from 'react'
import Login from '../pages/user/Login'
import Register from '../pages/user/Register'
import CaptainRegister from '../pages/captain/CaptainRegister'
import CaptainLogin from '../pages/captain/CaptainLogin'
import { Route, Routes } from 'react-router-dom'
import StartScreen from '../pages/StartScreen'
import Home from '../pages/Home'
import UserAuthWrapper from '../pages/user-auth-wrapper/UserAuthWrapper'

const IndexRoutes = () => {
  const token = localStorage.getItem("token")
  return (
    <Routes>
      <Route
        path='/'
        element={<StartScreen />}
      />
      <Route
        path='/login'
        element={<Login />}
      />
      <Route
        path='/register'
        element={<Register />}
      />
      <Route
        path='/register-captain'
        element={<CaptainRegister />}
      />
      <Route
        path='/login-captain'
        element={<CaptainLogin />}
      />
      <Route
        path='/home'
        element={
          <UserAuthWrapper>
            <Home />
          </UserAuthWrapper>
        }
      />
    </Routes>
  )
}

export default IndexRoutes