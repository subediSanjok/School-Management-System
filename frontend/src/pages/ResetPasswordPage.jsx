import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import '../styles/auth.css'

export function ResetPasswordPage() {
  const [search] = useSearchParams()
  const token = search.get('token')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [message, setMessage] = useState(null)
  useEffect(() => { document.body.classList.add('auth-bg'); return () => document.body.classList.remove('auth-bg') }, [])

  const submit = async (e) => {
    e.preventDefault(); setMessage(null)
    if (password !== confirm) { setMessage('Passwords must match'); return }
    try {
      const res = await fetch((import.meta.env.VITE_API_BASE_URL || 'http://localhost:8081') + '/api/auth/reset-password', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ token, password })
      })
      if (res.ok) setMessage('Password reset successfully')
      else setMessage('Reset failed')
    } catch (err) { setMessage('Network error') }
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-left" />
        <div className="auth-right">
          <h3 className="auth-title">Reset password</h3>
          <div className="auth-sub">Create a new password for your account.</div>
          <form onSubmit={submit}>
            <div className="form-field"><input type="password" placeholder="New password" value={password} onChange={(e)=>setPassword(e.target.value)} /></div>
            <div className="form-field"><input type="password" placeholder="Confirm password" value={confirm} onChange={(e)=>setConfirm(e.target.value)} /></div>
            {message && <div style={{ color: '#0f172a', marginBottom: 8 }}>{message}</div>}
            <button type="submit" className="primary-btn">Reset password</button>
          </form>
        </div>
      </div>
    </div>
  )
}
