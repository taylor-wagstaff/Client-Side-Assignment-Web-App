'use client'

import './berlin.css'
import Clock from '../../../components/Clock'

function Berlin() {
  return (
    <div className="clock">
      <Clock placeName="Berlin" region="Europe/Berlin" />
    </div>
  )
}

export default Berlin
