import React from "react"; 
import {CollectionPreviewContainer,TitleContainer, PreviewContainer } from "./preview-collection.styles";
import CollectionItem from "../collection-item/collection-item.component"

const CollectionPrev = ({title, items})=>(

    <CollectionPreviewContainer>

        <TitleContainer>{title.toUpperCase()}</TitleContainer>
        <PreviewContainer>

            {
                //we use the filter to show only 4 items.
                items.filter((item, idx)=> idx <4)
                .map((item)=>(
                    <CollectionItem key={item.id} item={item}/>
                ))}
        </PreviewContainer>
    </CollectionPreviewContainer>
)

export default CollectionPrev; 

