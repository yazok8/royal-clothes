import CartActionTypes from "./cart.type";
import {addItemToCart} from "./cart.utils";

const Initial_State= {
    hidden: true,
    cartItems:[]
}

//we are not using the payload here. It's optional. 
const CartReducer = (state= Initial_State, action ) =>{
    switch (action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN: 

        return {
            ...state, 
            hidden: !state.hidden
        }; 
        case CartActionTypes.ADD_ITEM: 
        return{
            ...state, 
            cartItems: addItemToCart(state.cartItems, action.payload)
        }

        default:
            return state; 
    }
}

export default CartReducer; 