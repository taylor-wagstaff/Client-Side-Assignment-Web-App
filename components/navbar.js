import Link from 'next/link'
import './navbar.css'

export default function Navbar() {
  return (
    <nav>
      <div className="nav-container">
        <div className="heading">
          <p>WORLDS DAY PROGRESS</p>
        </div>
        <div className="links-container">
          <Link href="/" className="home-style">
            HOME
          </Link>
        </div>
      </div>
    </nav>
  )
}
