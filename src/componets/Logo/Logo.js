import classes from "./Logo.module.css";
import Logotip from "../../img/logotip-sandwich.svg";


const Logo = () => {
    return (
        <div className={classes.Logo}>
            <img src={Logotip} alt="#" />
            <span>Sandwich Builder</span>
        </div>
    );
}

export default Logo;