import { useEffect, useState } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Preloader from "./components/Preloader/Preloader"
import Header from "./components/Header/Header"
import MobileNavWrapper from "./components/Header/MobileNavWrapper";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";


function App() {
  const [load, setLoad] = useState(false)
  const [isMobile, setIsMobile] = useState(false);
  const [showNavMobile, setShowNavMobile] = useState(false)

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
  // console.log(showNavMobile)

  window.addEventListener('load', () => {
    setLoad(true)
  })
  return (
    <Router>
      <div className="App">
        <Preloader load={load} />
        <Header setShowNavMobile={setShowNavMobile} />
        {isMobile ? <MobileNavWrapper showNavMobile={showNavMobile} setShowNavMobile={setShowNavMobile} /> : null}
        <div className="main">
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
