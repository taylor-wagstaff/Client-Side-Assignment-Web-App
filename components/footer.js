import Link from 'next/link'
import './footer.css'

export default function Footer() {
  return (
    <footer className="">
      <div className="footer-container">
        <p>Time Mates © 2023. All Rights Reserved.</p>
        <address>
          Office: 16A Malvern Street, Auckland , New
          Zealand.
        </address>
       

        <div className="contactInfo">
          Contact us: <br />
          Email:{' '}
          <a href="mailto:support@timemates.co.nz">support@timemates.co.nz</a>
          <br />
          Phone: <a href="">027 760 889</a>
        </div>

        <div className="footerLinks">
          <a href="/terms-of-service">Terms of Service</a> |
          <a href="/privacy-policy">Privacy Policy</a> |<a href="/faqs">FAQs</a>
        </div>


      </div>
    </footer>
  )
}
