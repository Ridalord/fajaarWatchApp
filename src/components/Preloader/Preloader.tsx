import { useEffect, useState } from "react";
import classes from "./Preloader.module.css"

type PropTypes = {
  load: boolean
}

export default function Preloader({ load }: PropTypes) {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (load) {
      timer = setTimeout(() => {
        setShowLoader(true);
      }, 3000); 
    }

    return () => clearTimeout(timer);
  }, [load]);
  
  return (
    <div id="pre-loader" className={showLoader ? classes.loaded : ''}>
      <div id="loader"></div>
    </div>
  )
}