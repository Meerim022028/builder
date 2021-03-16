import classes  from "./Layout.module.css";
import Toolbar  from "../Toolbar/Toolbar";
import Drawer from "../Drawer/Drawer"

const Layout =({children}) => {
    return (
        <div className={classes.Layout}>
            {children}
            <Toolbar/>
            <Drawer/>
           Loyout
        </div>
    );
}
export default Layout;