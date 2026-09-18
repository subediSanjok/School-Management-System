import React, { useEffect, useState } from 'react'
import '../styles/auth.css'

export function LockScreenPage() {
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState(null)
  useEffect(() => { document.body.classList.add('auth-bg'); return () => document.body.classList.remove('auth-bg') }, [])

  const submit = (e) => { e.preventDefault(); setMessage('Unlocked (placeholder)'); }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-left" />
        <div className="auth-right">
          <h3 className="auth-title">Locked</h3>
          <div className="auth-sub">Enter your password to continue.</div>
          <form onSubmit={submit}>
            <div className="form-field"><input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} /></div>
            {message && <div style={{ color: '#0f172a', marginBottom: 8 }}>{message}</div>}
            <button className="primary-btn" type="submit">Unlock</button>
          </form>
          <div className="center small" style={{ marginTop: 12 }}>Or <a href="/menu/pages/authentication/login" className="link">Sign in</a></div>
        </div>
      </div>
    </div>
  )
}
