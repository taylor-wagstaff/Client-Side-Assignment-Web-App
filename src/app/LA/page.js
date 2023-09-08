'use client'

import './la.css'
import Clock from '../../../components/Clock'

function LA() {
  return (
    <div className="clock">
      <Clock placeName="Los Angeles" region="America/Los_Angeles" />
    </div>
  )
}

export default LA
