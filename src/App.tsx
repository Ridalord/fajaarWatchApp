import { useEffect, useState } from "react"
import Preloader from "./components/Preloader/Preloader"
import Header from "./components/Header/Header"
import MobileNavWrapper from "./components/Header/MobileNavWrapper";
import Footer from "./components/Footer/Footer";


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
    <div className="App">
      <Preloader load={load} />
      <Header setShowNavMobile={setShowNavMobile} />
      {isMobile ? <MobileNavWrapper showNavMobile={showNavMobile} setShowNavMobile={setShowNavMobile} /> : null}
      <div className="main">
        
      </div>
      <Footer />
    </div>
  )
}

export default App
