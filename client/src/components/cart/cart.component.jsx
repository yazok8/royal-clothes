import React from "react"; 
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {withRouter} from "react-router-dom";
import CustomButton from "../custom-button/custom-button.component"; 
import "./cart.style.scss";
import CartItem from "../cart-item/cart-item.component";
import {selectCartItems} from "../../redux/cart/cart.selectors";
import {ToggleCartHidden} from "../../redux/cart/cart.action";

//stateless compnentt
const CartDropdown = ({cartItems, history, dispatch}) =>(

    <div className="cart-dropdown">
        <div className="cart-items"></div>
        {
            cartItems.length ? (
            cartItems.map(cartItem=> (
            <CartItem key={cartItem.id} item={cartItem} /> 
            ))
            ):(<span className="empty-message"> your cart is empty</span>)

        }
        <CustomButton 
        onClick={()=>{ history.push("/checkout");dispatch(ToggleCartHidden())}}>Go To Checkout</CustomButton>

    </div>
); 
//this will make that the cart dropdown is not being rendered whenver the state changes unrelated to the cart items. 
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});


export default withRouter(connect(mapStateToProps)(CartDropdown));