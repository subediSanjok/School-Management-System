import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')
    const username = localStorage.getItem('username')
    const role = localStorage.getItem('role')
    if (token && username) setUser({ username, role })
  }, [])

  const login = ({ token, username, role }) => {
    localStorage.setItem('token', token)
    localStorage.setItem('username', username)
    localStorage.setItem('role', role)
    setUser({ username, role })
    // Redirect based on role
    if (role === 'ADMIN' || role === 'Admin') navigate('/')
    else if (role === 'TEACHER') navigate('/dashboards/teacher')
    else if (role === 'STUDENT') navigate('/dashboards/student')
    else if (role === 'PARENT') navigate('/dashboards/parent')
    else navigate('/')
  }

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    localStorage.removeItem('role')
    setUser(null)
    navigate('/menu/pages/authentication/login')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
