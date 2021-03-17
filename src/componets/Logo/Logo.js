import classes from "./Logo.module.css";
import Logotip from "../../img/logotip-sandwich.svg";


const Logo = ({ }) => {
    return (
        <div className={classes.Logo}>
            <img src={Logotip} />
            <span>sandwich</span>
        </div>
    );
}

export default Logo;