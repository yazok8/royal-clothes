import React,{useEffect, lazy, Suspense} from "react"; 
import {Route} from "react-router-dom";
import {fetchCollectionsStart} from "../../redux/shop/shop.action";
import {connect} from "react-redux";
import Spinner from "../../components/spinner/spinner.component";

const CollectionsOverviewContainer = lazy(()=> import ("../../components/collection-overview/collection-overview.container"));

const CollectionPageContainer = lazy(()=>import("../collection/collection.container"));

const ShopPage = ({fetchCollectionStart, match}) => {

  useEffect(()=>{

    fetchCollectionStart();
    
  },[fetchCollectionStart])
  

    return (
      
     
        <Suspense fallback={<Spinner/>}> 
           <Route
          exact
          path={`${match.path}`}
          //props=match & history
          component={CollectionsOverviewContainer}/>
        <Route
          path={`${match.path}/:collectionId`}
          component= {CollectionPageContainer} />
          
          </Suspense>
    );
  }


const mapDispatchToProps = dispatch => ({
  fetchCollectionStart: ()=> dispatch(fetchCollectionsStart())
});

export default connect(
 null, mapDispatchToProps
)(ShopPage);