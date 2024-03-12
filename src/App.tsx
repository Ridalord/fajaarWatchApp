import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Preloader from "./components/Preloader/Preloader";
import Header from "./components/Header/Header";
import MobileNavWrapper from "./components/Header/MobileNavWrapper";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
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
      disable: false,
      startEvent: "DOMContentLoaded",
      once: true,
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          AOS.refresh();
        }
      });
    });

    document.querySelectorAll(".aos-init").forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoad(true);
    }, 3000); // Set a timeout to simulate loading delay. Replace with actual loading logic.

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Router basename="fajaarWatchApp">
      <div className="App fz-7-body">
        {!load && <Preloader load={load} />}
        {load && (
          <>
            <Header
              setShowNavMobile={setShowNavMobile}
              setShowSearchBar={setShowSearchBar}
              setShowWishlist={setShowWishlist}
              setShowCart={setShowCart}
            />
            {isMobile && (
              <MobileNavWrapper
                showNavMobile={showNavMobile}
                setShowNavMobile={setShowNavMobile}
              />
            )}
            <div className="main">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
              </Routes>
            </div>
            <Footer />
            {showSearchBar && (
              <SearchBarModal
                setShowSearchBar={setShowSearchBar}
                showSearchBar={showSearchBar}
              />
            )}
            {showWishlist && (
              <WishlistModal
                setShowWishlist={setShowWishlist}
                showWishlist={showWishlist}
              />
            )}
            {showCart && (
              <CartModal showCart={showCart} setShowCart={setShowCart} />
            )}
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
