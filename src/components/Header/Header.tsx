import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen, faHeart, faUser } from '@fortawesome/free-regular-svg-icons';
import { Bag, Search, List } from "react-bootstrap-icons";
import { faFacebookF, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Logo7dark from "./logo-7-dark.png"
import classes from "./Header.module.css"
import useCart from '../hooks/useCart';
import useWishlist from '../hooks/useWishlist';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

type PropTypes = {
  setShowNavMobile: React.Dispatch<React.SetStateAction<boolean>>,
  setShowSearchBar: React.Dispatch<React.SetStateAction<boolean>>
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>
  setShowWishlist: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Header({ setShowNavMobile, setShowSearchBar, setShowWishlist, setShowCart }: PropTypes) {
  const { totalCartItems } = useCart()
  const { totalWishlistItem } = useWishlist()
  const [fixed, setFixed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setFixed(true);
        document.body.style.paddingTop = `${document.querySelector('.to-be-fixed')?.getBoundingClientRect().height}px`;
      } else {
        setFixed(false);
        document.body.style.paddingTop = '0';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMenuClick = () => {
    setShowNavMobile(prev => !prev)
  }

  const handleClickSearch = () => {
    setShowSearchBar(prev => !prev)
  }

  const handleClickCart = () => {
    setShowCart(prev => !prev)
  }

  const handleWishlistClick = () => {
    setShowWishlist(prev => !prev)
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

      <div className={`fz-7-bottom-header to-be-fixed ${fixed ? 'fixed' : null}`}>
        <div className="container">
          <div className="row g-0 align-items-center">
            <div className="col-5 header-nav-container d-lg-block d-none">
              <nav className="fz-header-nav" id="fz_header_nav">
                <ul className="align-items-center">
                  <li className="fz-dropdown fz-nav-item">
                    <Link to="/" className="fz-nav-link"><span>home</span></Link>
                  </li>
                  <li className="fz-dropdown fz-nav-item">
                    <Link to="/shop" className="fz-nav-link"><span>shop</span> </Link>
                  </li>
                  <li className="fz-dropdown fz-nav-item">
                    <a role="button" className="fz-nav-link"><span>pages</span> +</a>

                    <ul className="fz-submenu">
                      <li><Link to={"/about"} className="fz-nav-link fz-submenu-nav-link">about</Link></li>
                      <li><a href="faq.html" className="fz-nav-link fz-submenu-nav-link">FAQ</a></li>
                      <li><a href="cart.html" className="fz-nav-link fz-submenu-nav-link">cart</a></li>
                      <li><a href="account.html" className="fz-nav-link fz-submenu-nav-link">account</a></li>
                      <li><a href="checkout.html" className="fz-nav-link fz-submenu-nav-link">Checkout</a></li>
                    </ul>
                  </li>
                  <li className="fz-dropdown fz-nav-item">
                    <a role="button" className="fz-nav-link">blog </a>
                  </li>
                  <li className="fz-nav-item"><a href="contact.html" className="fz-nav-link">contact</a></li>
                </ul>
              </nav>
            </div>

            <div className="col-lg-2 col-md-6 col-9">
              <div className="fz-logo-container text-lg-center text-start ms-0 ms-lg-auto">
                <a href="index.html">
                  <img src={Logo7dark} alt="logo" className="fz-logo" />
                </a>
              </div>
            </div>

            <div className="col-lg-5 col-md-6 col-3">
              <div className="fz-header-right-content">
                <ul className="fz-header-right-actions d-flex align-items-center justify-content-end">
                  <li>
                    <a role="button" className="fz-header-search-btn fz-2-search-btn d-none d-lg-block" onClick={handleClickSearch}>
                      <Search />
                    </a>
                  </li>
                  <li>
                    <a href="account.html" className="fz-header-user-btn d-none d-lg-block">
                      <FontAwesomeIcon icon={faUser} />
                    </a>
                  </li>
                  <li>
                    <a role="button" onClick={handleWishlistClick} className="fz-header-wishlist-btn fz-header-cart-btn d-none d-lg-block">
                      <FontAwesomeIcon icon={faHeart} />
                      <span className="count">{totalWishlistItem}</span>
                    </a>
                  </li>
                  <li>
                    <a role="button" className="fz-header-cart-btn d-none d-lg-block" onClick={handleClickCart}>
                      <Bag />
                      <span className="count">{totalCartItems}</span>
                    </a>
                  </li>
                  <li className="d-block d-lg-none"><a role="button" className="fz-hamburger" onClick={handleMenuClick}><List /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}