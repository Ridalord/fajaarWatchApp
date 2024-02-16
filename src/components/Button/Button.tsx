import { Link } from "react-router-dom";


type PropTypes = {
  text: string,
  link: string
}

export default function Button({text, link}: PropTypes) {
  return (
    <Link to={link} className="fz-6-banner-btn fz-6-sub-banner-btn">{text}</Link>
  )
}