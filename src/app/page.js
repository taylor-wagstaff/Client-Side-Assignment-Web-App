import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className="">
      <div className={styles.linksContainer}>
        <Link
          href="/Auckland"
          className={`${styles.linkStyle} ${styles.aucklandBorder}`}
        >
          AUCKLAND
        </Link>
        <Link
          href="/Paris"
          className={`${styles.linkStyle} ${styles.parisBorder}`}
        >
          PARIS
        </Link>
        <Link
          href="/Berlin"
          className={`${styles.linkStyle} ${styles.berlinBorder}`}
        >
          BERLIN
        </Link>
        <Link
          href="/Moscow"
          className={`${styles.linkStyle} ${styles.moscowBorder}`}
        >
          MOSCOW
        </Link>
        <Link
          href="/NewYork"
          className={`${styles.linkStyle} ${styles.nyBorder}`}
        >
          NEW YORK
        </Link>
        <Link
          href="/Sydney"
          className={`${styles.linkStyle} ${styles.sydneyBorder}`}
        >
          SYDNEY
        </Link>
        <Link
          href="/NewDelhi"
          className={`${styles.linkStyle} ${styles.newdelhiBorder}`}
        >
          NEW DELHI
        </Link>
        <Link
          href="/Beijing"
          className={`${styles.linkStyle} ${styles.beijingBorder}`}
        >
          BEIJING
        </Link>
        <Link
          href="/London"
          className={`${styles.linkStyle} ${styles.londonBorder}`}
        >
          LONDON
        </Link>
        <Link href="/LA" className={`${styles.linkStyle} ${styles.laBorder}`}>
          LOS ANGELES
        </Link>
      </div>
    </main>
  )
}
