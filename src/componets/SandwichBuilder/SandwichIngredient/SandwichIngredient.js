import classes from "./SandwichIngredient.module.css";
// import ketchupbackground from "../../../images/ketchup.svg";
import tomatoBackground from "../../../images/tomato.svg";
import baconBackground from "../../../images/bacon.svg";
import eggBackground from "../../../images/egg.svg";
import cheeseBackground from "../../../images/cheese.svg";
import meatBackground from "../../../images/meat.svg";
import saladBackground from "../../../images/salad.svg";






import React from "react";
const SandwichIngredient = ({ type }) => {
  const types = {
   tomato: { backgroundImage: `url(${tomatoBackground})`, width: "100%", height: "20px" },
    bacon: { backgroundImage: `url(${baconBackground})`, width: "100%", height: "10%" },
    egg: { backgroundImage: `url(${eggBackground})`, width: "100%", height: "70px" },
    cheese: { backgroundImage: `url(${cheeseBackground})`, width: "100%", height: "50px" },
    meat: { backgroundImage: `url(${meatBackground})`, width: "100%", height: "50px" },
    salad: { backgroundImage: `url(${saladBackground})`, width: "100%", height: "60px" },
    
  };


  return (
    <div 
    
    className={classes.SandwichIngredient} 
    style={types[type]}>

    </div>
  );
}

export default React.memo(SandwichIngredient);




// import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// import classes from './SandwichIngredient.module.css'

// class SandwichIngredient extends Component {
//     render() {
//         let ingredient = null;

//         switch (this.props.type) {
//             case ('bread-bottom'):
//                 ingredient = <div className={classes.BreadBottom}></div>;
//                 break;
//             case ('bread-top'):
//                 ingredient = (
//                     <div className={classes.BreadTop}>
//                         <div className={classes.Seeds1}></div>
//                         <div className={classes.Seeds2}></div>
//                     </div>
//                 );
//                 break;
//             case ('meat'):
//                 ingredient = <div className={classes.Meat}></div>;
//                 break;
//             case ('cheese'):
//                 ingredient = <div className={classes.Cheese}></div>;
//                 break;
//             case ('salad'):
//                 ingredient = <div className={classes.Salad}></div>;
//                 break;
//             case ('bacon'):
//                 ingredient = <div className={classes.Bacon}></div>;
//                 break;
//             default:
//                 ingredient = null;
//         }
//         return ingredient;
//     }
// };

// SandwichIngredient.propTypes = {
//     type: PropTypes.string.isRequired
// };

// export default SandwichIngredient;