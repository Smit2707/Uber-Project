import React, { useContext } from 'react'
import IndexRoutes from './routes/IndexRoutes'
import { ToastContainer } from 'react-toastify'
import { userDataContext } from './context/UserContext'
const App = () => {
  const userData = useContext(userDataContext)
  console.log(userData)
  return (
    <div>
      <IndexRoutes />
      <ToastContainer />
    </div>
  )
}

export default App