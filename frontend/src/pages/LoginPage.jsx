import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import '../styles/auth.css'

export function LoginPage() {
  const { login } = useContext(AuthContext)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  useEffect(() => { document.body.classList.add('auth-bg'); return () => document.body.classList.remove('auth-bg') }, [])

  const submit = async (e) => {
    e.preventDefault()
    setError(null)
    try {
      const res = await fetch((import.meta.env.VITE_API_BASE_URL || 'http://localhost:8081') + '/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || 'Login failed')
        return
      }
      login({ token: data.token, username: data.username, role: data.role })
    } catch (err) {
      setError('Network error')
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-left" />
        <div className="auth-right">
          <h3 className="auth-title">Welcome back</h3>
          <div className="auth-sub">Sign in to continue to the School Management System</div>
          <form onSubmit={submit}>
            <div className="form-field">
              <input placeholder="Username or email" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="form-field">
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            {error && <div style={{ color: 'red', marginBottom: 8 }}>{error}</div>}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
              <label className="small"><input type="checkbox" /> Remember me</label>
              <a href="/menu/pages/authentication/forgot-password" className="link small">Forgot?</a>
            </div>
            <button type="submit" className="primary-btn">Sign in</button>
          </form>
          <div className="center small" style={{ marginTop: 12 }}>
            Don't have an account? <a href="/menu/pages/authentication/register" className="link">Create one</a>
          </div>
        </div>
      </div>
    </div>
  )
}
