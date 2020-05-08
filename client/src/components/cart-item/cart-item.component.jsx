import React from "react"; 
import {CartItemContainer, ImageContainer, ItemDetailsContainer} from "./cart-item.styles"

const CartItem =({item : {imageUrl, price, name, quantity}}) =>(

    <CartItemContainer>

        <ImageContainer src={imageUrl} alt="item">
        </ImageContainer>
        <ItemDetailsContainer>
            <span>{name}</span>
            <span>
                {quantity} x ${price}
                </span>
        </ItemDetailsContainer>

    </CartItemContainer>
)


export default React.memo(CartItem); 