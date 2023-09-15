import './contact.css'

function Contact() {
  return (
    <div className="contact-container">
      <div className="card_contact">
        <h1>CONTACT US</h1>
        <div className="card_contact_details">
          <p>For any enquiries or concerns, please send us a message</p>

          <form className="form-items">
            <div>
             
              <input type="text" placeholder="Name" id="name" name="name" />
            </div>

            <div>
             
              <input type="email" placeholder="Email" id="email" name="email" />
            </div>

            <div>
        
              <textarea id="message" placeholder="Message" name="message" rows="4"></textarea>
            </div>

            <div>
              <button className="submit-button" type="submit">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
