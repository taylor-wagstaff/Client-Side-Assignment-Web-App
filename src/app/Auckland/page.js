'use client'

import './auckland.css'
import Clock from '../../../components/Clock'

function Auckland() {
  return (
    <div className="clock">
      <Clock placeName="Auckland" region="Pacific/Auckland" />
    </div>
  )
}

export default Auckland
