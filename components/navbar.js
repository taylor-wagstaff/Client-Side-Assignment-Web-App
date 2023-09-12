import Link from 'next/link'
import './navbar.css'

export default function Navbar() {
  return (
    <nav>
      <div className="nav-container">
        <div className="links-container">
          <Link href="/" className="home-style">
            HOME
          </Link>
          <Link href="/" className="home-style">
            CONTACT
          </Link>
          <Link href="/" className="home-style">
            ABOUT
          </Link>
        </div>
      </div>
    </nav>
  )
}
