import { Link } from "react-router-dom";
import classes from "./Header.module.css"
import useAuth from "../hooks/useAuth";

type PropTypes = {
  onClose: () => void,
}

export default function AccountAccordion({onClose}:PropTypes) {
  const { isLoggedIn } = useAuth()
  const handleLinkClick = () => {
    onClose();
  };

  return (
    <ul className={`flex ${classes.select} ${classes.accountAccordion}`}>
      <li><Link to={"/account"} onClick={handleLinkClick}>My Account</Link></li>
      <li><Link to={"/account"} onClick={handleLinkClick}>{isLoggedIn ? "Logout" : "Sign In"}</Link></li>
    </ul>
  );
}