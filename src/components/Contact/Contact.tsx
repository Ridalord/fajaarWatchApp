import { Clock, GeoAlt, Phone} from "react-bootstrap-icons";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import ContactForm from "./ContactForm";
import { faFacebook, faInstagram, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


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
                <GeoAlt/>
                <span className="contact-address">12 Allen Avenue Ikeja, Lagos 100281</span>
              </li>

              <li className="fz-single-contact-info">
                <Phone/>
                <div className="contact-numbers">
                  <span><a href="tel:+2348132246772">(+234) 813-224-6772</a></span>
                </div>
              </li>

              <li className="fz-single-contact-info">
                <Clock/>
                <div className="contact-numbers">
                  <span className="store-time__title">Store Hours:</span>
                  <span className="store-time__hours">Mon - Sat : 8:00am - 5:00pm</span>
                </div>
              </li>

              <li className="contact-socials">
                <h6 className="contact-socials__title">Follow Us:</h6>
                <ul>
                  <li><a href="#"><FontAwesomeIcon icon={faFacebook}/></a></li>
                  <li><a href="#"><FontAwesomeIcon icon={faXTwitter}/></a></li>
                  <li><a href="#"><FontAwesomeIcon icon={faInstagram}/> </a></li>
                  <li><a href="#"><FontAwesomeIcon icon={faYoutube}/></a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
    </>
  )
}