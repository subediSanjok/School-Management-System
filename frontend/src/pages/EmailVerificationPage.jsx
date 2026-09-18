import React, { useEffect, useState } from 'react'
import '../styles/auth.css'

export function EmailVerificationPage() {
  const [message, setMessage] = useState(null)
  useEffect(() => { document.body.classList.add('auth-bg'); return () => document.body.classList.remove('auth-bg') }, [])

  const resend = async () => {
    setMessage(null)
    try {
      const res = await fetch((import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080') + '/api/auth/resend-verification', { method: 'POST' })
      setMessage(res.ok ? 'Verification email sent' : 'Could not resend')
    } catch (err) { setMessage('Network error') }
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-left" />
        <div className="auth-right">
          <h3 className="auth-title">Verify your email</h3>
          <div className="auth-sub">We've sent a verification link to your email address.</div>
          {message && <div style={{ color: '#0f172a', marginBottom: 8 }}>{message}</div>}
          <div style={{ marginTop: 12 }}>
            <button className="primary-btn" onClick={resend}>Resend verification email</button>
          </div>
          <div className="center small" style={{ marginTop: 12 }}>Back to <a href="/menu/pages/authentication/login" className="link">Sign in</a></div>
        </div>
      </div>
    </div>
  )
}
