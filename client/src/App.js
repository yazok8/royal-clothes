import React, { useEffect } from "react";

import {Route, Switch, Redirect} from "react-router-dom";
import {  connect } from "react-redux";

import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-up-and-sign-in/sign-up-and-sign-in.component"
import SendEmail from "./components/contact-page/contact-page.component"; 
import Checkout from "./pages/checkout/checkout.component";
import Header from "./components/header/header.component";

import {GlobalStyles} from "./global.styles";

import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "./redux/user/user.selector";
import {checkUserSession} from "./redux/user/user.action";

/* this route takes these three options, when "exact" is not give a value it means that it's true by default */

// The switch allows to follow a pattern where we know that as long as one route matches then that's the only thing we're going to render.
  //in order to have access to the state, we will convert the app to a class components 

  const App=({checkUserSession, currentUser})=> {

    useEffect(()=>{
      checkUserSession()
    },[checkUserSession ])

    return (

      <div>
        <GlobalStyles/>
        <Header />
        <Switch>
        
       <Route exact path="/" component={Homepage}/>
       <Route path="/shop" component={ShopPage} />
       <Route path="/contact" component={SendEmail} />
       <Route exact path="/signin" render={()=>currentUser? (<Redirect to="/" />) : (<SignInAndSignUpPage/>)}/>
       <Route exact path="/checkout" component={Checkout}/>
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
