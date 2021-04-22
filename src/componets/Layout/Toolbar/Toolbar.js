// import classes from "./Toolbar.module.css";
// import Logo from "../../UI/Logo/Logo";
// import Nav from "../../Nav/Nav"
// import DrawerOpen from "../Drawer/DrawerOpen/DrawerOpen";



// const Toolbar = ({ openDrawer }) => {
//     return (
//       <div className={classes.Toolbar}>
//         <Logo />
//         <Nav />
//         <DrawerOpen click={openDrawer} />
//       </div>
//     );
//   }
   
//   export default Toolbar;

import DrawerOpen from "../Drawer/DrawerOpen/DrawerOpen";
import Logo from "../../UI/Logo/Logo";
import Nav from "../../Nav/Nav";

import classes from "./Toolbar.module.css";

const Toolbar = ({ openDrawer }) => {
  return (
    <div className={classes.Toolbar}>
      <Logo />
      <nav>
        <Nav />
      </nav>
      <DrawerOpen click={openDrawer} />
    </div>
  );
}

export default Toolbar;