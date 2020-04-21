import React from "react"; 
import {connect} from "react-redux";
import CustomButton from "../custom-button/custom-button.component"; 
import "./cart.style.scss";
import CartItem from "../cart-item/cart-item.component";


//stateless compnentt
const CartDropdown = ({cartItems}) =>(

    <div className="cart-dropdown">
        <div className="cart-items"></div>
        {
            cartItems.map(cartItem=> (
            <CartItem key={cartItem.id} item={cartItem} /> 
            ))}
        <CustomButton>Go To Checkout</CustomButton>

    </div>
); 

const mapStateToProps = ({cart : {cartItems}}) =>({
    cartItems
})


export default connect (mapStateToProps)(CartDropdown);