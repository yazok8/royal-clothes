import React from "react";
import {connect} from "react-redux"; 
import {ToggleCartHidden} from "../../redux/cart/cart.action"
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg"; 

import "./cart-icon.style.scss"; 

const CartIcon=({ToggleCartHidden})=>(

    <div className="cart-icon" onClick={ToggleCartHidden}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">0</span>
    </div>
)
const mapDispatchToProps = dispatch =>({

    ToggleCartHidden: () =>dispatch(ToggleCartHidden())
})
 export default connect(null, mapDispatchToProps)(CartIcon);
