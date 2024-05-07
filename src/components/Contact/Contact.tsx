import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <>
      <Breadcrumbs page="contact" />
      <div className="container">
        <div className="fz-inner-contact-details">

          <ContactForm/>

          <div className="fz-inner-contact-details__info-card">
            <h3 className="fz-inner-contact-details__title">Get In Touch</h3>
            <ul>
              <li className="fz-single-contact-info">
                <i className="fa-light fa-location-dot"></i>
                <span className="contact-address">989 Bel Meadow Drive Los Angeles, CA 90017</span>
              </li>

              <li className="fz-single-contact-info">
                <i className="fa-light fa-phone"></i>
                <div className="contact-numbers">
                  <span><a href="tel:+2348132246772">(+234) 813-224-6772</a></span>
                  {/* <span><a href="tel:470-142-2412">(+1) 470-142-2412</a></span> */}
                </div>
              </li>

              <li className="fz-single-contact-info">
                <i className="fa-light fa-clock"></i>
                <div className="contact-numbers">
                  <span className="store-time__title">Store Hours:</span>
                  <span className="store-time__hours">Mon - Sat : 8:00am - 5:00pm</span>
                </div>
              </li>

              <li className="contact-socials">
                <h6 className="contact-socials__title">Follow Us:</h6>
                <ul>
                  <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                  <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                  <li><a href="#"><i className="fa-brands fa-youtube"></i></a></li>
                  <li><a href="#"><i className="fa-brands fa-tiktok"></i></a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
    </>
  )
}