import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Preloader from "./components/Preloader/Preloader";
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
import '@mantine/core/styles.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductDetails from "./components/Shop/ProductDetails"; // Assuming this is the correct import for the ProductDetails component
import About from "./components/About/About";
import Cart from "./components/Cart/Cart";
import Contact from "./components/Contact/Contact";
import Account from "./components/Account/Account";
// import { ProductType } from "./components/context/ProductsProvider";

function App() {
  // const [load] = useState(true);
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

  return (
    <Router basename="fajaarWatchApp">
      <div className="App fz-7-body">
        {/* <Preloader load={load} /> */}
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
            setShowWishlist={setShowWishlist}
          />
        ) : null}
        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:id" element={<ProductDetails />} /> 
            <Route path="/about" element={<About />} /> 
            <Route path="/cart" element={<Cart />} /> 
            <Route path="/contact" element={<Contact />} /> 
            <Route path="/account" element={<Account />} /> 
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
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
