import React from "react";
import {connect} from "react-redux"; 
import {createStructuredSelector} from "reselect";
import {ToggleCartHidden} from "../../redux/cart/cart.action"
import {selectCartItemsCount} from "../../redux/cart/cart.selectors";
import {CartIconContainer,ShoppingIcon, ItemCountContainer} from "./cart-icon.styles"



const CartIcon=({ToggleCartHidden, itemCount})=>(

    <CartIconContainer onClick={ToggleCartHidden}>
        <ShoppingIcon/>
        <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartIconContainer>
)
const mapDispatchToProps = dispatch =>({

    ToggleCartHidden: () =>dispatch(ToggleCartHidden())
})

const mapStateToProps= createStructuredSelector({
    itemCount: selectCartItemsCount
})

 export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
