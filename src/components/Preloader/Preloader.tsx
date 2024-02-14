import classes from "./Preloader.module.css"

type PropTypes = {
  load: boolean
}

export default function Preloader({load}: PropTypes) {
  
  return (
    <div id="pre-loader" className={load ? classes.loaded : ""}>
      <div id="loader"></div>
    </div>
  )
}