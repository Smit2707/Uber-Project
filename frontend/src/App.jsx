import React, { useContext } from 'react'
import IndexRoutes from './routes/IndexRoutes'
import { ToastContainer } from 'react-toastify'
import { userDataContext } from './context/UserContext'
const App = () => {
  const userData = useContext(userDataContext);
  return (
    <div>
      <IndexRoutes />
      <ToastContainer theme='dark' autoClose={3000} position='top-right' />
    </div>
  )
}

export default App