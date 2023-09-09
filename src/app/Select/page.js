'use client'

import './select.css'
import SelectClock from '../../../components/SelectClock'
import React, { useState } from 'react'

function Select() {
  const [location, setLocation] = useState('Pacific/Auckland')
  const [name, setName] = useState('Auckland')

  const handleChange = (e) => {
    setLocation(e.target.value)
    const selectedOption = e.target.options[e.target.selectedIndex]
    setName(selectedOption.text)
  }

  return (
    <div className="clock">
      <div className="location-select">
        <div className='location-select-heading'>
          <p>CHOOSE ANOTHER LOCATION?</p>
        </div>

        <select value={location} onChange={handleChange}>
          <option value="Asia/Tokyo" name="Tokyo">
            Tokyo
          </option>
          <option value="Africa/Cairo" name="Cairo">
            Cairo
          </option>
          <option value="America/Sao_Paulo" name="São Paulo">
            São Paulo
          </option>
          <option value="Asia/Bangkok" name="Bangkok">
            Bangkok
          </option>
          <option value="Africa/Johannesburg" name="Johannesburg">
            Johannesburg
          </option>
          <option value="Asia/Dubai" name="Dubai">
            Dubai
          </option>
          <option value="America/Mexico_City" name="Mexico City">
            Mexico City
          </option>
          <option value="Asia/Singapore" name="Singapore">
            Singapore
          </option>
          <option value="America/Toronto" name="Toronto">
            Toronto
          </option>
          <option value="Europe/Istanbul" name="Istanbul">
            Istanbul
          </option>
          <option value="Asia/Hong_Kong" name="Hong Kong">
            Hong Kong
          </option>
          <option value="Europe/Rome" name="Rome">
            Rome
          </option>
          <option value="South_America/Buenos_Aires" name="Buenos Aires">
            Buenos Aires
          </option>
          <option value="Asia/Seoul" name="Seoul">
            Seoul
          </option>
          <option value="Africa/Lagos" name="Lagos">
            Lagos
          </option>
          <option value="Europe/Stockholm" name="Stockholm">
            Stockholm
          </option>
          <option value="Australia/Melbourne" name="Melbourne">
            Melbourne
          </option>
          <option value="North_America/Vancouver" name="Vancouver">
            Vancouver
          </option>
          <option value="Europe/Amsterdam" name="Amsterdam">
            Amsterdam
          </option>
          <option value="Asia/Kuala_Lumpur" name="Kuala Lumpur">
            Kuala Lumpur
          </option>
          <option value="Africa/Nairobi" name="Nairobi">
            Nairobi
          </option>
        </select>
      </div>

      <SelectClock placeName={name} region={location} />
    </div>
  )
}

export default Select
