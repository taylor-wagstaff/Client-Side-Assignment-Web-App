import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className="">
      <div className={styles.linksContainer}>
        <Link href="/Auckland" className={`${styles.linkStyle} ${styles.aucklandBorder}`}>
          AUCKLAND
        </Link>
        <Link href="/Paris" className={`${styles.linkStyle} ${styles.parisBorder}`}>
          PARIS
        </Link>
        <Link href="/Berlin" className={`${styles.linkStyle} ${styles.berlinBorder}`}>
          BERLIN
        </Link>
        <Link href="/Moscow" className={`${styles.linkStyle} ${styles.moscowBorder}`}>
          MOSCOW
        </Link>
        <Link href="/NewYork" className={`${styles.linkStyle} ${styles.nyBorder}`}>
          NEW YORK
        </Link>
      </div>
    </main>
  )
}
