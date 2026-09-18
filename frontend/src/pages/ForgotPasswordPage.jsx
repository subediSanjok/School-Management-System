import React, { useEffect, useState } from 'react'
import '../styles/auth.css'

export function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState(null)
  useEffect(() => { document.body.classList.add('auth-bg'); return () => document.body.classList.remove('auth-bg') }, [])

  const submit = async (e) => {
    e.preventDefault()
    setMessage(null)
    try {
      const res = await fetch((import.meta.env.VITE_API_BASE_URL || 'http://localhost:8081') + '/api/auth/forgot-password', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email })
      })
      if (res.ok) setMessage('If the address exists you will receive reset instructions.')
      else setMessage('Could not process request')
    } catch (err) { setMessage('Network error') }
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-left" />
        <div className="auth-right">
          <h3 className="auth-title">Forgot password</h3>
          <div className="auth-sub">Enter your email to receive reset instructions.</div>
          <form onSubmit={submit}>
            <div className="form-field"><input placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} /></div>
            {message && <div style={{ color: '#0f172a', marginBottom: 8 }}>{message}</div>}
            <button type="submit" className="primary-btn">Send reset link</button>
          </form>
          <div className="center small" style={{ marginTop: 12 }}>
            Remembered? <a href="/menu/pages/authentication/login" className="link">Sign in</a>
          </div>
        </div>
      </div>
    </div>
  )
}
