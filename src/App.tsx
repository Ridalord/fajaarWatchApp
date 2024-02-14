import { useState } from "react"
import Preloader from "./components/Preloader/Preloader"


function App() {
  const [load, setLoad] = useState(false)
  window.addEventListener('load', () => {
    setLoad(true)
  })
  return (
    <div className="App">
      <Preloader load={load} />
    </div>
  )
}

export default App
