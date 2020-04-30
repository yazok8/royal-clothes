import {compose} from "redux";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectIsCollectionsFetching} from "../../redux/shop/shop.selector";
import WithSpinner from "../with-spinner/with-spinner.component";
import collectionOverview from "./collection-overview.component";


const mapStateToProp=createStructuredSelector({
    isLoading: selectIsCollectionsFetching
});

// const collectionOverviewContainer= connect(mapStateToProp)(WithSpinner(collectionOverview));

const CollectionsOverviewContainer= compose (

    connect(mapStateToProp),
    WithSpinner
    )   (collectionOverview);

export default CollectionsOverviewContainer;