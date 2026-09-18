import React, { useEffect, useState } from 'react'
import '../styles/auth.css'

export function RegisterPage() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [message, setMessage] = useState(null)

  useEffect(() => { document.body.classList.add('auth-bg'); return () => document.body.classList.remove('auth-bg') }, [])

  const submit = async (e) => {
    e.preventDefault()
    setMessage(null)
    if (password !== confirm) { setMessage('Passwords do not match'); return }
    try {
      // Try to call backend register if exists
      const res = await fetch((import.meta.env.VITE_API_BASE_URL || 'http://localhost:8081') + '/api/auth/register', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
      })
      if (res.ok) setMessage('Account created — check email to verify (if enabled).')
      else {
        const data = await res.json().catch(() => null)
        setMessage((data && data.error) || 'Registration failed')
      }
    } catch (err) { setMessage('Network error') }
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-left" />
        <div className="auth-right">
          <h3 className="auth-title">Create account</h3>
          <div className="auth-sub">Register a new account to access the system.</div>
          <form onSubmit={submit}>
            <div className="form-field"><input placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)} /></div>
            <div className="form-field"><input placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} /></div>
            <div className="form-field"><input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} /></div>
            <div className="form-field"><input type="password" placeholder="Confirm password" value={confirm} onChange={(e)=>setConfirm(e.target.value)} /></div>
            {message && <div style={{ color: '#0f172a', marginBottom: 8 }}>{message}</div>}
            <button type="submit" className="primary-btn">Create account</button>
          </form>
          <div className="center small" style={{ marginTop: 12 }}>
            Already registered? <a href="/menu/pages/authentication/login" className="link">Sign in</a>
          </div>
        </div>
      </div>
    </div>
  )
}
