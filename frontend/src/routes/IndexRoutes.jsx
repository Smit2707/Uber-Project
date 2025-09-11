import React from 'react'
import Login from '../pages/user/Login'
import Register from '../pages/user/Register'
import CaptainRegister from '../pages/captain/CaptainRegister'
import CaptainLogin from '../pages/captain/CaptainLogin'
import { Route, Routes } from 'react-router-dom'
import StartScreen from '../pages/StartScreen'
import Home from '../pages/Home'
import UserAuthWrapper from '../pages/auth-wrapper/UserAuthWrapper'
import CaptainHome from '../pages/captain/CaptainHome'
import CaptainAuthWrapper from '../pages/auth-wrapper/CaptainAuthWrapper'

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
        element={token ? <Home /> : <Login />}
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
        path='/captain-home'
        element={
          <CaptainAuthWrapper>
            <CaptainHome />
          </CaptainAuthWrapper>
        }
      />
      <Route
        path='/home'
        element={
          <UserAuthWrapper>
            <Home />
          </UserAuthWrapper>
        }
      />
      {/* <Route
        path='/riding'
        element={
          <UserAuthWrapper>
            <Riding />
          </UserAuthWrapper>
        }
      /> */}
    </Routes>
  )
}

export default IndexRoutes