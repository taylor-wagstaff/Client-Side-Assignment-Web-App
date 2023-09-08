'use client'

import './sydney.css'
import Clock from '../../../components/Clock'

function Sydney() {
  return (
    <div className="clock">
      <Clock placeName="Sydney" region="Australia/Sydney" />
    </div>
  )
}

export default Sydney
