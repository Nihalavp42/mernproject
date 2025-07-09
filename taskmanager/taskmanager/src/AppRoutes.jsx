import React from 'react'
import { Route,Routes,Navigate } from 'react-router-dom'
import Login from './Components/auth/Login'
import { AuthContext } from './context/authContext'
import { useContext } from 'react'
import Dashboard from './Components/pages/Dashboard'
import Register from './Components/auth/Register'
function AppRoutes() {
    const {token,role } = useContext(AuthContext)
  return (
  <Routes>
    <Route path='/login' element={<Login/>}></Route>
       <Route path='/register' element={<Register />}></Route>
    <Route path='/' element={token && role === "admin" ? <Dashboard /> : <Navigate to="/login" />}></Route>
  </Routes>
  )
}

export default AppRoutes