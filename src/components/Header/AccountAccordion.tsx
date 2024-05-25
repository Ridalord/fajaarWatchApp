import { Link } from "react-router-dom";
import classes from "./Header.module.css"
import useAuth from "../hooks/useAuth";


export default function AccountAccordion() {
  const { isLoggedIn } = useAuth()
  console.log(isLoggedIn)
  return (
    <ul className={`${classes.select} ${classes.accountAccordion}`}>
      <li><Link to={"/account"}>{isLoggedIn?"Account":"Login"}</Link></li>
      <li><Link to={"/account"}>{isLoggedIn? "Logout":"Signup"}</Link></li>
    </ul>
  )
}