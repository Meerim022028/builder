import classes from "./NavItem.module.css";

const NavItem = ({ children,url,active }) => {
    return (
        <ul className={classes.NavItem}>
            <a href={url} className={active ? classes.active : null}>
                {children}
            </a>
        </ul>
    );
}
export default NavItem;