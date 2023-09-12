// How to Create an Accessible Progress Bar With React BY MARY GATHONI
// https://www.makeuseof.com/react-progress-bar-accessible-create/
import './ProgressBar.css'
import { useState, useEffect } from 'react'

const ProgressBar = ({ progress }) => {
  const [percentage, setPercentage] = useState(0)

  useEffect(() => {
    // check if its a valid number because it comes up with
    // NaN when it loads.
    if (typeof progress === 'number' && !isNaN(progress)) {
      setPercentage(progress)
    }
  }, [progress])

  const generateGradient = (percentage) => {
    return `linear-gradient(to right, #595959 ${percentage - 20}%, lightgrey ${
      percentage + 10
    }%, white 100%)`
  }

  const bar = {
    height: '100%',
    width: `${percentage}%`,
    backgroundImage: generateGradient(percentage),
    overFlow: 'hidden',
    transition: 'width 2s ease-in-out',
    border: '2px solid black',
    borderRadius: '3rem',

  }

  return (
    <div className="container">
      <div
        style={bar}
        role="progressbar"
        aria-valuenow={percentage}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div className="label-container">
          <span className="label">{`${percentage}%`}</span>
        </div>
      </div>
    </div>
  )
}

export default ProgressBar
