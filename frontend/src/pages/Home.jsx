import React, { useContext } from 'react'
import { userDataContext } from '../context/UserContext'

const Home = () => {
  const data = useContext(userDataContext);
  console.log(data);
  return (
    <div>Home</div>
  )
}

export default Home