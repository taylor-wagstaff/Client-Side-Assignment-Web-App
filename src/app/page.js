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

  // Chat GPT
  useEffect(() => {
    const savedNames = localStorage.getItem('cityNames')
    if (savedNames) {
      setCityNames(JSON.parse(savedNames))
    }
  }, [])

  // Chat GPT
  useEffect(() => {
    localStorage.setItem('cityNames', JSON.stringify(cityNames))
  }, [cityNames])

  // Chat GPT
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
          <div>
            <label htmlFor="name">Friend:</label>
            <input type="text" id="name" name="name" />
          </div>

          <div>
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
            <button
              className={styles.submitButton}
              value="Submit"
              type="submit"
            >
              Add
            </button>
          </div>
      
      
        </form>
      </div>

      <div className={styles.linksContainer}>
        <Link
          href="/Auckland"
          className={`${styles.linkStyle} ${styles.aucklandBorder}`}
        >
          <div>AUCKLAND</div>
          <div className={styles.friendsText}>{cityNames.AUCKLAND}</div>
        </Link>
        <Link
          href="/Paris"
          className={`${styles.linkStyle} ${styles.parisBorder}`}
        >
          <div>PARIS</div>
          <div className={styles.friendsText}>{cityNames.PARIS}</div>
        </Link>
        <Link
          href="/Berlin"
          className={`${styles.linkStyle} ${styles.berlinBorder}`}
        >
          <div>BERLIN</div>
          <div className={styles.friendsText}>{cityNames.BERLIN}</div>
        </Link>
        <Link
          href="/Moscow"
          className={`${styles.linkStyle} ${styles.moscowBorder}`}
        >
          <div>MOSCOW</div>
          <div className={styles.friendsText}>{cityNames.MOSCOW}</div>
        </Link>
        <Link
          href="/NewYork"
          className={`${styles.linkStyle} ${styles.nyBorder}`}
        >
          <div>NEW YORK</div>
          <div className={styles.friendsText}>{cityNames.NEWYORK}</div>
        </Link>
        <Link
          href="/Sydney"
          className={`${styles.linkStyle} ${styles.sydneyBorder}`}
        >
          <div>SYDNEY</div>
          <div className={styles.friendsText}>{cityNames.SYDNEY}</div>
        </Link>
        <Link
          href="/NewDelhi"
          className={`${styles.linkStyle} ${styles.newdelhiBorder}`}
        >
          <div>NEW DELHI</div>
          <div className={styles.friendsText}>{cityNames.NEWDELHI}</div>
        </Link>
        <Link
          href="/Beijing"
          className={`${styles.linkStyle} ${styles.beijingBorder}`}
        >
          <div>BEIJING</div>
          <div className={styles.friendsText}>{cityNames.BEIJING}</div>
        </Link>
        <Link
          href="/London"
          className={`${styles.linkStyle} ${styles.londonBorder}`}
        >
          <div>LONDON</div>
          <div className={styles.friendsText}>{cityNames.LONDON}</div>
        </Link>
        <Link href="/LA" className={`${styles.linkStyle} ${styles.laBorder}`}>
          <div>LOS ANGELES</div>
          <div className={styles.friendsText}>{cityNames.LOSANGELES}</div>
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
