'use client'

import './newyork.css'
import Clock from '../../../components/Clock'

function Newyork() {
  return (
    <div className="clock">
      <Clock placeName="New York" region="America/New_York" />
    </div>
  )
}

export default Newyork
