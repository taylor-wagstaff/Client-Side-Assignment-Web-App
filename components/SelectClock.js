import './SelectClock.css'
import React, { useState, useEffect } from 'react'
import ProgressBar from './ProgressBar'

function SelectClock({ placeName, region }) {
  const [time, setTime] = useState('')
  const [timeProgress, setTimeProgress] = useState(0)

  const getTimeInTimeZone = (timeZone) => {
    return new Intl.DateTimeFormat('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZone: timeZone,
      hour12: true,
      hourCycle: 'h11',
    }).format(new Date())
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeInTimeZone(region))
    }, 1000)

    return () => clearInterval(interval)
  }, [region])

  useEffect(() => {
    let hour = parseInt(time.slice(0, 2), 10)
    let minute = parseInt(time.slice(3, 5), 10)
    let amOrPm = time.slice(-2)

    if (amOrPm === 'PM' && hour !== 12) {
      hour += 12
    }
    if (amOrPm === 'AM' && hour === 12) {
      hour = 0
    }

    let elapsedMinutes = hour * 60 + minute
    let progress = (elapsedMinutes / 1440) * 100

    setTimeProgress(Math.round(progress))
  }, [time])

  return (
    <div className="clock">
      <header className="clock-header">
        <div>
          <ProgressBar progress={timeProgress} />
        </div>
        <div>
          <p>
            {placeName}: {time}
          </p>
        </div>
      </header>
    </div>
  )
}

export default SelectClock
