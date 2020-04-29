import React from "react";
import {connect} from "react-redux";
import { addItem } from "../../redux/cart/cart.action"
import {PriceContainer, NameContainer, CollectionFooterContainer, BackgroundImage, AddButton, CollectionItemContainer} from "./collection-item.styles"
//functional component
const CollectionItem= ({ item,addItem })=>{

    //distructure these properties from the item instead of props  
    const {name, price, imageUrl}= item;

    return (
<CollectionItemContainer>

<BackgroundImage className='image' imageUrl={imageUrl} />
        <CollectionFooterContainer>
           <NameContainer>{name}</NameContainer>
            <PriceContainer>{price}</PriceContainer>

        </CollectionFooterContainer>  

        <AddButton onClick={() => addItem(item)} inverted>
        Add to cart
      </AddButton>
</CollectionItemContainer>

    )}
const mapDispatchToProps=dispatch =>({

    addItem: item =>dispatch(addItem(item))
})


export default connect(null, mapDispatchToProps)(CollectionItem);