import { statusTones } from '../data/smsData'

export function StatusPill({ value }) {
  return <span className={`pill ${statusTones[value] || 'neutral'}`}>{value}</span>
}

