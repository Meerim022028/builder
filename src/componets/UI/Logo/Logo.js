import classes from "./Logo.module.css";
import Logotip from "../../../images/logotip-sandwich.svg";


const Logo = () => {
    return (
        <div className={classes.Logo}>
            <img src={Logotip} alt="#" />
            <span>Burger Builder</span>
        </div>
    );

}

export default Logo;