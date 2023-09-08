'use client'

import './beijing.css'
import Clock from '../../../components/Clock'

function Beijing() {
  return (
    <div className="clock">
      <Clock placeName="Beijing" region="Asia/Shanghai" />
    </div>
  )
}

export default Beijing
