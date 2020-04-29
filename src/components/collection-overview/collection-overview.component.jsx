import React from "react"; 
import { connect} from "react-redux";
import {createStructuredSelector} from "reselect";  
import {CollectionOverviewContainer} from "./collection-overview.styles";

import CollectionPrev from "../../components/preview-collection/preview-collection.component";
import { selectCollectionsForPreview} from "../../redux/shop/shop.selector";


const collectionOverview= ({collections}) =>(
    <CollectionOverviewContainer>
                {/* //otherCollectionProps are the titles and items of each item */}
            {collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPrev key={id} {...otherCollectionProps}/>
            ))
            }
    </CollectionOverviewContainer>
); 

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(collectionOverview)