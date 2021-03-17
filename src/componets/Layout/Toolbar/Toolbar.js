import classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import Nav from "../../Nav/Nav"

const Toolbar = () => {
    return (
        <div className={classes.Toolbar}>
            <Logo />
            <Nav />
            

        </div>
    );
}

export default Toolbar;