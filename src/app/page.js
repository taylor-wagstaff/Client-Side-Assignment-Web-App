'use client'

import Link from 'next/link'
import styles from './page.module.css'
import React, { useState, useEffect } from 'react'

// I used chat gpt to figure out how to access local storage so
// that if the users refreshes the names are still there

export default function Home() {
  const [cityNames, setCityNames] = useState({
    AUCKLAND: '',
    PARIS: '',
    BERLIN: '',
    MOSCOW: '',
    NEWYORK: '',
    SYDNEY: '',
    NEWDELHI: '',
    BEIJING: '',
    LONDON: '',
    LOSANGELES: '',
  })

  useEffect(() => {
    // Load from localStorage only once after the component mounts
    const savedNames = localStorage.getItem('cityNames')
    if (savedNames) {
      setCityNames(JSON.parse(savedNames))
    }
  }, []) // Empty dependency array ensures this runs once after mounting

  useEffect(() => {
    // Save to localStorage whenever cityNames changes
    localStorage.setItem('cityNames', JSON.stringify(cityNames))
  }, [cityNames])

  const handleFormSubmit = (e) => {
    e.preventDefault()
    const Name = e.target.name.value

    const friendsName = `${Name}`
    const selectedPlace = e.target.places.value

    // Update the state with the new name for the selected city
    setCityNames((prevNames) => ({
      ...prevNames,
      [selectedPlace]: friendsName,
    }))
  }

  return (
    <main>
      <div className={styles.formContainer}>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="name">Friend:</label>
          <input type="text" id="name" name="name" />

          <label htmlFor="places">Place:</label>
          <select name="places" id="places">
            <option value="AUCKLAND">AUCKLAND</option>
            <option value="PARIS">PARIS </option>
            <option value="BERLIN">BERLIN</option>
            <option value="MOSCOW">MOSCOW</option>
            <option value="NEWYORK">NEW YORK</option>
            <option value="SYDNEY">SYDNEY</option>
            <option value="NEWDELHI">NEW DELHI</option>
            <option value="LONDON">LONDON</option>
            <option value="LOSANGELES">LOS ANGELES</option>
          </select>

          <button className={styles.submitButton} value="Submit" type="submit">
            Add
          </button>
        </form>
      </div>

      <div className={styles.linksContainer}>
        <Link
          href="/Auckland"
          className={`${styles.linkStyle} ${styles.aucklandBorder}`}
        >
          AUCKLAND <p className={styles.friendsText}>{cityNames.AUCKLAND}</p>
        </Link>
        <Link
          href="/Paris"
          className={`${styles.linkStyle} ${styles.parisBorder}`}
        >
          PARIS <p className={styles.friendsText}>{cityNames.PARIS}</p>
        </Link>
        <Link
          href="/Berlin"
          className={`${styles.linkStyle} ${styles.berlinBorder}`}
        >
          BERLIN  <p className={styles.friendsText}>{cityNames.BERLIN}</p>
        </Link>
        <Link
          href="/Moscow"
          className={`${styles.linkStyle} ${styles.moscowBorder}`}
        >
          MOSCOW  <p className={styles.friendsText}>{cityNames.MOSCOW}</p>
        </Link>
        <Link
          href="/NewYork"
          className={`${styles.linkStyle} ${styles.nyBorder}`}
        >
          NEW YORK <p className={styles.friendsText}>{cityNames.NEWYORK}</p>
        </Link>
        <Link
          href="/Sydney"
          className={`${styles.linkStyle} ${styles.sydneyBorder}`}
        >
          SYDNEY <p className={styles.friendsText}>{cityNames.SYDNEY}</p>
        </Link>
        <Link
          href="/NewDelhi"
          className={`${styles.linkStyle} ${styles.newdelhiBorder}`}
        >
          NEW DELHI <p className={styles.friendsText}>{cityNames.NEWDELHI}</p>
        </Link>
        <Link
          href="/Beijing"
          className={`${styles.linkStyle} ${styles.beijingBorder}`}
        >
          BEIJING <p className={styles.friendsText}>{cityNames.BEIJING}</p>
        </Link>
        <Link
          href="/London"
          className={`${styles.linkStyle} ${styles.londonBorder}`}
        >
          LONDON <p className={styles.friendsText}>{cityNames.LONDON}</p>
        </Link>
        <Link href="/LA" className={`${styles.linkStyle} ${styles.laBorder}`}>
          LOS ANGELES <p className={styles.friendsText}>{cityNames.LOSANGELES}</p>
        </Link>
        <Link
          href="/Select"
          className={`${styles.linkStyle} ${styles.selectBorder}`}
        >
          +
        </Link>
      </div>
    </main>
  )
}
