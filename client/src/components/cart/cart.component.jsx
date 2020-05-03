import React from "react"; 
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {withRouter} from "react-router-dom";
import CustomButton from "../custom-button/custom-button.component"; 
import CartItem from "../cart-item/cart-item.component";
import {selectCartItems} from "../../redux/cart/cart.selectors";
import {ToggleCartHidden} from "../../redux/cart/cart.action";
import {CartDropdownContainer,EmptyMessageContainer,CartItemsContainer} from "./cart.styles"

//stateless compnentt
const CartDropdown = ({cartItems, history, dispatch}) =>(

    <CartDropdownContainer>
        <CartItemsContainer>
        {
            cartItems.length ? (
            cartItems.map(cartItem=> (
            <CartItem key={cartItem.id} item={cartItem} /> 
            ))
            ):(<EmptyMessageContainer> your cart is empty</EmptyMessageContainer>)

        }
        </CartItemsContainer>
        <CustomButton inverted={true} 
        onClick={()=>{ history.push("/checkout");dispatch(ToggleCartHidden())}}>Checkout</CustomButton>

    </CartDropdownContainer>
); 
//this will make that the cart dropdown is not being rendered whenver the state changes unrelated to the cart items. 
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});


export default withRouter(connect(mapStateToProps)(CartDropdown));