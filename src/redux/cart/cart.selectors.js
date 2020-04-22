import {createSelector} from "reselect"; 

const selectCart = state =>state.cart; 

export const selectCartItems = createSelector(
    [selectCart], 
    cart => cart.cartItems

);

export const selectCartHidden= createSelector(
    //we do [selectCart] or without 
    selectCart,
    cart=> cart.hidden
)

export const selectCartItemsCount = createSelector(
    [selectCartItems], 
    cartItems=> 
    //reduce method will calculate the total of the items whenever we add each item. 
    cartItems.reduce((accumulatedQuantity, cartItem)=> accumulatedQuantity + cartItem.quantity, 0)
);

export const totalCartSelecter = createSelector(
    [selectCartItems], 
    cartItems=>
    cartItems.reduce((accumulatedQuantity, cartItem)=> accumulatedQuantity + cartItem.quantity * cartItem.price, 0)

)