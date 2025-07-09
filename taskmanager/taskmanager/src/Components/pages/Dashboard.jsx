import React from 'react'
import { AuthContext } from '../../context/authContext'
import { useContext } from 'react'
import Login from '../auth/Login'

function Dashboard() {
    const {token,user} = useContext(AuthContext);
  return (
    <div>
<h1>welcome to {user.email}</h1>:<Login />
    </div>
  )
}

export default Dashboard