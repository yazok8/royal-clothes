import React, { useEffect, lazy, Suspense } from "react";

import {Route, Switch, Redirect} from "react-router-dom";
import { connect } from "react-redux";
import Header from "./components/header/header.component";
import Spinner from "./components/spinner/spinner.component"
import ErrorBoundary from "./components/error-boundary/error-boundary.component";

import {GlobalStyles} from "./global.styles";

import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "./redux/user/user.selector";
import {checkUserSession} from "./redux/user/user.action";


const Homepage= lazy(() => import ("./pages/homepage/homepage.component"));
const ShopPage= lazy(()=>import ("./pages/shop/shop.component"));
const SignInAndSignUpPage = lazy(()=> import ("./pages/sign-up-and-sign-in/sign-up-and-sign-in.component"));
const Checkout= lazy(() => import  ("./pages/checkout/checkout.component"));
const SendEmail= lazy(()=> import ("./components/contact-page/contact-page.component")); 

  const App=({checkUserSession, currentUser})=> {

    useEffect(()=>{
      checkUserSession()
    },[checkUserSession ])

    return (

      <div>
        <GlobalStyles/>
        <Header />
        <Switch>
          <ErrorBoundary>
          <Suspense fallback={<Spinner/>}>
      
       <Route exact path="/" component={Homepage}/>
       <Route path="/shop" component={ShopPage} />

  
       <Route path="/contact" component={SendEmail} />
       <Route exact path="/signin" render={()=>currentUser? (<Redirect to="/" />) : (<SignInAndSignUpPage/>)}/>
       <Route exact path="/checkout" component={Checkout}/>
       </Suspense>
       </ErrorBoundary>
       </Switch>
  
      </div>
  
    );
}

const mapStateToProps= createStructuredSelector({

  currentUser: selectCurrentUser,

})

const mapDispatchToProps = dispatch=>({
  checkUserSession:()=>dispatch(checkUserSession())
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
