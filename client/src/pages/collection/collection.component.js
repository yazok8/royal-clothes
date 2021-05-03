import React from "react"; 

import {connect} from "react-redux"; 
import {selectCollection} from "../../redux/shop/shop.selector";
import {CollectionPageConatiner,CollectionItemsContainer,CollectionTitle} from "./collection.styles";
import CollectionItem from "../../components/collection-item/collection-item.component"


const CollectionPage= ({collection})=> {

    const {title, items}=collection; 

return(

    <CollectionPageConatiner>
        <CollectionTitle>{title}</CollectionTitle>
        <CollectionItemsContainer>
            {
                items.map(item =>( <CollectionItem key={item.id} item={item}/>
                )
            )
        }
        </CollectionItemsContainer>
   </CollectionPageConatiner>
);

};

const mapStateToProps = (state, ownProps) =>({

    collection: selectCollection(ownProps.match.params.collectionId)(state)

})

export default connect(mapStateToProps)(CollectionPage); 
