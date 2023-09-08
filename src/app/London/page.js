'use client'

import './london.css'
import Clock from '../../../components/Clock'

function London() {
  return (
    <div className="clock">
      <Clock placeName="London" region="Europe/London" />
    </div>
  )
}

export default London
