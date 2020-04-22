
//check our cartItems if the item already exists
export const addItemToCart= (cartItems, cartItemToAdd)=> {

    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id); 
//to update the quantity of the cartItems
    if(existingCartItem){
        return cartItems.map(cartItem =>
            cartItem.id ===cartItemToAdd.id
            ? {
                ...cartItem, quantity:cartItem.quantity +1}
            : cartItem
            )
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}]

}