import { faFacebookF, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faXmarkCircle} from '@fortawesome/free-regular-svg-icons';
// import Accordion, { AccordionSlots } from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import Fade from '@mui/material/Fade';
// import { useState } from 'react';
import { Search, Bag, Heart, X} from "react-bootstrap-icons";
import classes from "./MobileNavWrapper.module.css"
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';




type PropTypes = {
  showNavMobile: boolean
  setShowNavMobile: React.Dispatch<React.SetStateAction<boolean>>
}

export default function MobileNavWrapper({ showNavMobile, setShowNavMobile }: PropTypes) {
  // const [expanded, setExpanded] = useState(false);

  const handleToggleNavMobile = (event: { preventDefault: () => void; }) => {
    event?.preventDefault()
    setShowNavMobile((prevExpanded) => !prevExpanded);
  };
  const handleCloseNavMobile = () => {
    setShowNavMobile(false);
  };
  return (
    <div className={`fz-offcanvas-main-nav-wrapper fz-7-body ${showNavMobile? 'open' : null}`}>
      <button className="fz-button-close" onClick={handleToggleNavMobile}><X/> </button>
      <div className="fz-offcanvas-main-nav-wrapper-sections">
        <div className="fz-offcanvas-main-nav-section">
          <div className="mobile-menu-updated">
            <div className="mean-bar"><a href="#nav" className="meanmenu-reveal" style={{ right: "0px", left: "auto", display: "inline-block" }}><span><span><span></span></span></span></a><nav className="mean-nav">
              <ul className="align-items-center" >
                <li className="fz-nav-item">
                  <Link to="/" onClick={handleCloseNavMobile} role="button" className="fz-nav-link"><span>HOME</span></Link>
                </li>
                <li className="fz-dropdown fz-nav-item">
                  <Link to="/shop" onClick={handleCloseNavMobile} role="button" className="fz-nav-link"><span>SHOP</span></Link>
                </li>
                <li className="fz-dropdown fz-nav-item">
                  <Accordion className={classes.accordionWrap}>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header className={classes.accordionHeader}>PAGES</Accordion.Header>
                      <Accordion.Body className={classes.accordionBody}>
                        <ul className="fz-submenu">
                          <li><Link to="/about" onClick={handleCloseNavMobile} className="fz-nav-link fz-submenu-nav-link">ABOUT</Link></li>
                          <li><Link to="/" onClick={handleCloseNavMobile} className="fz-nav-link fz-submenu-nav-link">FAQ</Link></li>
                          <li><Link to="/cart" onClick={handleCloseNavMobile} className="fz-nav-link fz-submenu-nav-link">CART</Link></li>
                          <li><Link to="/" onClick={handleCloseNavMobile} className="fz-nav-link fz-submenu-nav-link">ACCOUNT</Link></li>
                          <li><Link to="/" onClick={handleCloseNavMobile} className="fz-nav-link fz-submenu-nav-link">CHECKOUT</Link></li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </li>
                <li className="fz-dropdown fz-nav-item">
                  <a role="button" className="fz-nav-link">BLOG</a>
                </li>
                <li className="fz-nav-item mean-last"><a href="contact.html" className="fz-nav-link">CONTACT</a></li>
              </ul>
            </nav></div>
          </div>
        </div>
        <div className="fz-offcanvas-main-sideinfo-section">

          <div className="fz-offcanvas-main-sideinfo">
            <div className="fz-offcanvas-main-search mb-45">
              <form action="#">
                <input type="search" name="s" placeholder="Search Product" id="search-input"/>
                <input type="hidden" name="post_type" />
                <button type="submit"><Search/></button>
              </form>
            </div>
            <div className="fz-offcanvas-main-actions mb-15">
              <a href="cart.html"><span className={`fz-off-actions-icon ${classes.circledIcon}`}><Bag/>
              </span> <span className="fz-off-actions-text"><span>View Cart</span><span>View Cart</span></span></a>
              <a href="#"> <span className={classes.circledIcon}><Heart /></span> <span className="fz-off-actions-text"><span>View
                Wishlist</span><span>View Wishlist</span></span></a>
            </div>

            <div className="fz-offcanvas-main-contacts">
              <h4 className="fz-offcanvas-main-contacts-title mb-30">Get In Touch</h4>

              <ul className="fz-offcanvas-main-contacts-list">
                <li>
                  <i className="fa-thin fa-location-dot"></i>
                  <span className="fz-offcanvas-main-contact-text">989 Bel Meadow Drive Los Angeles, CA 90017</span>
                </li>
                <li>
                  <i className="fa-thin fa-phone-flip"></i>
                  <span className="fz-offcanvas-main-contact-text">
                    <a href="tel:(+1)909-407-2988">(+1) 909-407-2988</a> <br/>
                      <a href="tel:(+1)470-142-2412">(+1) 470-142-2412</a>
                  </span>
                </li>

                <li>
                  <i className="fa-thin fa-clock"></i>
                  <span className="fz-offcanvas-main-contact-text">Store Hours:<br/><span className="fz-opentime">Mon - Sat : 8am -
                    5pm</span></span>
                </li>

              </ul>
            </div>

            <div className="fz-offcanvas-main-socials mt-45">
              <a href="#"><FontAwesomeIcon icon={faFacebookF}/><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#"><FontAwesomeIcon icon={faTwitter} /><i className="fa-brands fa-twitter"></i></a>
              <a href="#"><FontAwesomeIcon icon={faInstagram} /><i className="fa-brands fa-instagram"></i></a>
              <a href="#"><FontAwesomeIcon icon={faYoutube} /><i className="fa-brands fa-youtube"></i></a>
            </div>

            </div>
          </div>
        </div>
      </div>
  )
}