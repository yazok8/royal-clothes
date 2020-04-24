import React from "react"; 
import { connect} from "react-redux";
import {createStructuredSelector} from "reselect";  

import CollectionPrev from "../../components/preview-collection/preview-collection.component";
import { selectCollectionsForPreview} from "../../redux/shop/shop.selector";
import "./collection-overview.style.scss"


const collectionOverview= ({collections}) =>(
    <div className="collection-overview">
                {/* //otherCollectionProps are the titles and items of each item */}
            {collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPrev key={id} {...otherCollectionProps}/>
            ))
            }
    </div>
); 

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(collectionOverview)