import React from "react";
import {connect} from "react-redux"; 
import {createStructuredSelector} from "reselect";
import {ToggleCartHidden} from "../../redux/cart/cart.action"
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg"; 
import {selectCartItemsCount} from "../../redux/cart/cart.selectors";
import "./cart-icon.style.scss"; 



const CartIcon=({ToggleCartHidden, itemCount})=>(

    <div className="cart-icon" onClick={ToggleCartHidden}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">{itemCount}</span>
    </div>
)
const mapDispatchToProps = dispatch =>({

    ToggleCartHidden: () =>dispatch(ToggleCartHidden())
})

const mapStateToProps= createStructuredSelector({
    itemCount: selectCartItemsCount
})

 export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
