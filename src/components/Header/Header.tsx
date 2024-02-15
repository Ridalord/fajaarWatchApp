import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen, faHeart, faUser } from '@fortawesome/free-regular-svg-icons';
import {  Bag, Search, List } from "react-bootstrap-icons";
import { faFacebookF, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Logo7dark from "./logo-7-dark.png"
import classes from "./Header.module.css"

type PropTypes = {
  setShowNavMobile: React.Dispatch<React.SetStateAction<boolean>>,
}

export default function Header({ setShowNavMobile }: PropTypes) {
  const handleMenuClick = () => {
    setShowNavMobile(prev => !prev)
  }
  return (
    <header className="fz-header-section fz-1-header-section fz-7-header">
      <div className="top-header fz-7-top-header">
        <div className="container">
          <div className="row gy-3 align-items-center">
            <div className="col-lg-4 d-lg-block d-none">
              <span className="mail-address">
                <a href="mailto:info@webmail.com">
                  <FontAwesomeIcon icon={faEnvelopeOpen} />
                  info@webmail.com
                </a>
              </span>
            </div>

            <div className="col-lg-4 col-md-6">
              <h6>SALE: 400+ products up to 70% off. Shop Now</h6>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="top-header-right-actions">
                <div className="top-header-socials">
                  <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                  <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                  <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                  <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
                </div>

                <select name="currency" id="top-header-currency-dropdown" className={classes.select}>
                  <option value="USD">USD</option>
                  <option value="Taka">Taka</option>
                  <option value="Euro">Euro</option>
                  <option value="Rupee">Rupee</option>
                </select>

                <select name="language" id="top-header-language-dropdown" className={classes.select}>
                  <option value="English">English</option>
                  <option value="Bangla">Bangla</option>
                  <option value="French">French</option>
                  <option value="Hindi">Hindi</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fz-7-bottom-header to-be-fixed">
        <div className="container">
          <div className="row g-0 align-items-center">
            <div className="col-5 header-nav-container d-lg-block d-none">
              <nav className="fz-header-nav" id="fz_header_nav">
                <ul className="align-items-center">
                  <li className="fz-dropdown fz-nav-item">
                    <a role="button" className="fz-nav-link"><span>home</span></a>

                    {/* <ul className="fz-submenu">
                      <li><a href="index.html" className="fz-nav-link fz-submenu-nav-link">Door Shop</a></li>
                      <li><a href="index-2.html" className="fz-nav-link fz-submenu-nav-link">Jewelry Shop</a></li>
                      <li><a href="index-3.html" className="fz-nav-link fz-submenu-nav-link">Cake Shop</a></li>
                      <li><a href="index-4.html" className="fz-nav-link fz-submenu-nav-link">Electric Shop</a></li>
                      <li><a href="index-5.html" className="fz-nav-link fz-submenu-nav-link">Sunglass Shop</a></li>
                      <li><a href="index-6.html" className="fz-nav-link fz-submenu-nav-link">Car Parts Shop</a></li>
                      <li><a href="index-7.html" className="fz-nav-link fz-submenu-nav-link">Watch Shop</a></li>
                      <li><a href="index-8.html" className="fz-nav-link fz-submenu-nav-link">Cycle Shop</a></li>
                      <li><a href="index-9.html" className="fz-nav-link fz-submenu-nav-link">Kid's Cloth Shop</a></li>
                      <li><a href="index-10.html" className="fz-nav-link fz-submenu-nav-link">Bag Shop 01</a></li>
                      <li><a href="index-11.html" className="fz-nav-link fz-submenu-nav-link">CCTV Shop</a></li>
                      <li><a href="index-12.html" className="fz-nav-link fz-submenu-nav-link">Bag Shop 02</a></li>
                    </ul> */}
                  </li>
                  <li className="fz-dropdown fz-nav-item">
                    <a role="button" className="fz-nav-link"><span>shop</span> </a>

                    {/* <ul className="fz-submenu">
                      <li><a href="shop.html" className="fz-nav-link fz-submenu-nav-link">Shop</a></li>
                      <li><a href="shop-2.html" className="fz-nav-link fz-submenu-nav-link">Shop 02</a></li>
                      <li><a href="shop-details.html" className="fz-nav-link fz-submenu-nav-link">shop details</a></li>
                    </ul> */}
                  </li>
                  <li className="fz-dropdown fz-nav-item">
                    <a role="button" className="fz-nav-link"><span>pages</span> +</a>

                    <ul className="fz-submenu">
                      <li><a href="about.html" className="fz-nav-link fz-submenu-nav-link">about</a></li>
                      <li><a href="faq.html" className="fz-nav-link fz-submenu-nav-link">FAQ</a></li>
                      <li><a href="cart.html" className="fz-nav-link fz-submenu-nav-link">cart</a></li>
                      <li><a href="account.html" className="fz-nav-link fz-submenu-nav-link">account</a></li>
                      <li><a href="checkout.html" className="fz-nav-link fz-submenu-nav-link">Checkout</a></li>
                    </ul>
                  </li>
                  <li className="fz-dropdown fz-nav-item">
                    <a role="button" className="fz-nav-link">blog </a>

                    {/* <ul className="fz-submenu">
                      <li><a href="blog.html" className="fz-nav-link fz-submenu-nav-link">Blog</a></li>
                      <li><a href="blog-details.html" className="fz-nav-link fz-submenu-nav-link">Blog-details</a></li>
                    </ul> */}
                  </li>
                  <li className="fz-nav-item"><a href="contact.html" className="fz-nav-link">contact</a></li>
                </ul>
              </nav>
            </div>

            <div className="col-lg-2 col-md-6 col-9">
              <div className="fz-logo-container text-lg-center text-start ms-0 ms-lg-auto">
                <a href="index.html">
                  <img src={Logo7dark} alt="logo" className="fz-logo"/>
                </a>
              </div>
            </div>

            <div className="col-lg-5 col-md-6 col-3">
              <div className="fz-header-right-content">
                <ul className="fz-header-right-actions d-flex align-items-center justify-content-end">
                  <li>
                    <a role="button" className="fz-header-search-btn fz-2-search-btn d-none d-lg-block">
                      <Search/>
                    </a>
                  </li>
                  <li>
                    <a href="account.html" className="fz-header-user-btn d-none d-lg-block">
                      <FontAwesomeIcon icon={faUser} />
                    </a>
                  </li>
                  <li>
                    <a role="button" className="fz-header-wishlist-btn d-none d-lg-block">
                      <FontAwesomeIcon icon={faHeart} />
                    </a>
                  </li>
                  <li>
                    <a role="button" className="fz-header-cart-btn d-none d-lg-block">
                      <Bag/>
                      <span className="count">0</span>
                    </a>
                  </li>
                  <li className="d-block d-lg-none"><a role="button" className="fz-hamburger" onClick={handleMenuClick}><List/></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}