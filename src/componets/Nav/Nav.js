import { useSelector } from "react-redux";
import classes from "./Nav.module.css";
import NavItem from "./NavItem/NavItem";

const Nav = () => {
const inAuthenticated = useSelector(state => state.auth.token !==null);

  return (
    <ul className={classes.Nav}>
      <NavItem url="/" active>Builder</NavItem>
      {! inAuthenticated ? <NavItem url="/auth">Login</NavItem> : null}
      {inAuthenticated ? <NavItem url="/orders">Orders</NavItem> : null}
      {inAuthenticated ? <NavItem url="/logout">Logout</NavItem> : null}
      
    </ul>
  );
}

export default Nav;