import React from "react"; 
import {Route} from "react-router-dom";
import {createStructuredSelector} from "reselect";
import {fetchCollectionsStartAsync} from "../../redux/shop/shop.action";
import {selectIsCollectionsFetching} from "../../redux/shop/shop.selector";
import {connect} from "react-redux";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import collectionOverview from "../../components/collection-overview/collection-overview.component"; 
import CollectionPage from "../collection/collection.component";

const CollectionsOverviewWithSpinner = WithSpinner(collectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    componentDidMount() {
      const {fetchCollectionStartAsync}= this.props; 
      fetchCollectionStartAsync();
    }
  
  render() {
    const { match, isCollectionFetching } = this.props;
    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          //props=match & history
          render={ props => (
            <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSpinner isLoading={isCollectionFetching} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionsFetching
})

const mapDispatchToProps = dispatch => ({
  fetchCollectionStartAsync: ()=> dispatch(fetchCollectionsStartAsync())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopPage);