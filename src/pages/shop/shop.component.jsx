import React from "react"; 
import Shop_Data from "./shop.data.js"
import CollectionPrev from "../../components/preview-collection/preview-collection.component";


class ShopPage extends React.Component{

    constructor(props){
        super(props); 

        this.state={

            collections: Shop_Data
        }
    }

    render(){
        const {collections} =this.state;
        return <div className="shop-page">{
            //otherCollectionProps are the titles and items of each item
            collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPrev key={id} {...otherCollectionProps}/>
            ))
            }</div>;     
    }
}

export default ShopPage; 

