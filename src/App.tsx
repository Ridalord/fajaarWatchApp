import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Preloader from "./components/Preloader/Preloader";
import Header from "./components/Header/Header";
import MobileNavWrapper from "./components/Header/MobileNavWrapper";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import SearchBarModal from "./components/SearchBarModal/SearchBarModal";
import WishlistModal from "./components/WishlistModal/WishlistModal";
import CartModal from "./components/CartModal/CartModal";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [load, setLoad] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showNavMobile, setShowNavMobile] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showWishlist, setShowWishlist] = useState(false);

  useEffect(() => {
    const checkWindowWidth = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkWindowWidth();
    window.addEventListener("resize", checkWindowWidth);

    return () => {
      window.removeEventListener("resize", checkWindowWidth);
    };
  }, []);

  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 150, // offset (in px) from the original trigger point
      delay: 4000, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  }, []);

  window.addEventListener("load", () => {
    setLoad(true);
  });
  return (
    <Router basename="fajaarWatchApp">
      <div className="App fz-7-body">
        <Preloader load={load} />
        <Header
          setShowNavMobile={setShowNavMobile}
          setShowSearchBar={setShowSearchBar}
          setShowWishlist={setShowWishlist}
          setShowCart={setShowCart}
        />
        {isMobile ? (
          <MobileNavWrapper
            showNavMobile={showNavMobile}
            setShowNavMobile={setShowNavMobile}
          />
        ) : null}
        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <Footer />
        {showSearchBar ? (
          <SearchBarModal
            setShowSearchBar={setShowSearchBar}
            showSearchBar={showSearchBar}
          />
        ) : null}
        {showWishlist ? (
          <WishlistModal
            setShowWishlist={setShowWishlist}
            showWishlist={showWishlist}
          />
        ) : null}
        {showCart ? (
          <CartModal showCart={showCart} setShowCart={setShowCart} />
        ) : null}
      </div>
    </Router>
  );
}

export default App;
