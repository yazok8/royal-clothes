import React from "react"; 

import "./preview-collection.style.scss"
import CollectionItem from "../collection-item/collection-item.component"

const CollectionPrev = ({title, items})=>(

    <div className="collection-preview">

        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">

            {
                //we use the filter to show only 4 items.
                items.filter((item, idx)=> idx <4)
                .map(({id, ...otherItemProps})=>(
                    <CollectionItem key={id} {...otherItemProps}/>
                ))}
        </div>
    </div>
)

export default CollectionPrev; 

