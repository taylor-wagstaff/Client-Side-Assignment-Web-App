'use client'

import './moscow.css'
import Clock from '../../../components/Clock'

function Moscow() {
  return (
    <div className="clock">
      <Clock placeName="Moscow" region="Europe/Moscow" />
    </div>
  )
}

export default Moscow
