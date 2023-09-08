'use client'

import './paris.css'
import Clock from '../../../components/Clock'

function Paris() {
  return (
    <div className="clock">
      <Clock placeName="Paris" region="Europe/Paris" />
    </div>
  )
}

export default Paris
