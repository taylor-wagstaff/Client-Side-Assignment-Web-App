import Link from 'next/link'
import './navbar.css'

export default function Navbar() {
  return (
    <nav>
      <div className="nav-container">
        <div className="links-container">
          <Link href="/" className="link-style">
            Home
          </Link>
          <Link href="/About" className="link-style">
            About
          </Link>
          <Link href="/Contact" className="link-style">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}
