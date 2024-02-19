import { useEffect, useState } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Preloader from "./components/Preloader/Preloader"
import Header from "./components/Header/Header"
import MobileNavWrapper from "./components/Header/MobileNavWrapper";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import SearchBarModal from "./components/SearchBarModal/SearchBarModal";
import WishlistModal from "./components/WishlistModal/WishlistModal";
import CartModal from "./components/CartModal/CartModal";


function App() {
  const [load, setLoad] = useState(false)
  const [isMobile, setIsMobile] = useState(false);
  const [showNavMobile, setShowNavMobile] = useState(false)
  const [showSearchBar, setShowSearchBar] = useState(false)
  const [showCart, setShowCart] = useState(false)
  const [showWishlist, setShowWishlist] = useState(false)

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

  window.addEventListener('load', () => {
    setLoad(true)
  })
  return (
    <Router>
      <div className="App">
        <Preloader load={load} />
        <Header setShowNavMobile={setShowNavMobile} setShowSearchBar={setShowSearchBar} setShowWishlist={setShowWishlist} setShowCart={setShowCart} />
        {isMobile ? <MobileNavWrapper showNavMobile={showNavMobile} setShowNavMobile={setShowNavMobile} /> : null}
        <div className="main">
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
        <Footer />
        {showSearchBar ? <SearchBarModal setShowSearchBar={setShowSearchBar} showSearchBar={showSearchBar} /> : null}
        {showWishlist ? <WishlistModal setShowWishlist={setShowWishlist} showWishlist={showWishlist} /> : null}
        {showCart ? <CartModal showCart={showCart} setShowCart={setShowCart} />: null}
      </div>
    </Router>
  )
}

export default App
