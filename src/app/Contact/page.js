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
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" />
            </div>

            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" />
            </div>

            <div>
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="4"></textarea>
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
