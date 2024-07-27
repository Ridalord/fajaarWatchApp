import { Link } from "react-router-dom";
import classes from "./Header.module.css"
import useAuth from "../hooks/useAuth";

type PropTypes = {
  onClose: () => void,
}

export default function AccountAccordion({onClose}:PropTypes) {
  const { isLoggedIn, dispatch, REDUCER_ACTIONS, currentUser } = useAuth()
  const handleLinkClick = () => {
    onClose();
  };
  const handleLogOut = () => {
    dispatch({ type: REDUCER_ACTIONS.LOGOUT })
    onClose()
  }

  return (
    <ul className={`flex ${classes.select} ${classes.accountAccordion}`}>
      <li><Link to={"/account"} onClick={handleLinkClick}>My Account {isLoggedIn && `(${currentUser.firstName})`}</Link></li>
      <li><Link to={"/account"} onClick={handleLogOut}>{isLoggedIn ? "Logout" : "Sign In"}</Link></li>
    </ul>
  );
}