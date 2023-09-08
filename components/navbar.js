import Link from 'next/link'
import './navbar.css'

export default function Navbar() {
  return (
    <nav>
      <div className="nav-container">
        <div className="links-container">
       
          <h1>WORLDS DAY PROGRESS</h1>
        
          <Link href="/" className='home-style'>HOME</Link>
        </div>
      </div>
    </nav>
  )
}
