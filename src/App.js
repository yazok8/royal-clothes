import React from "react";
import "./App.css";

import {Route, Switch, Redirect} from "react-router-dom";
import {  connect } from "react-redux";
import {createStructuredSelector} from "reselect";
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";
import {setCurrentUser} from "./redux/user/user.action"
import {selectCurrentUser} from "./redux/user/user.selector";



import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component.jsx";
import SignInAndSignUpPage from "./pages/sign-up-and-sign-in/sign-up-and-sign-in.component.jsx"
import Checkout from "./pages/checkout/checkout.component";





/* this route takes these three options, when "exact" is not give a value it means that it's true by default */

// The switch allows to follow a pattern where we know that as long as one route matches then that's the only thing we're going to render.
  //in order to have access to the state, we will convert the app to a class components 
class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {

    //we will distructure this of props. 
    const {setCurrentUser}= this.props; 

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // this.setState({ currentUser: user });


      //userAuth!=null
      if(userAuth){
        const userRef = await  createUserProfileDocument(userAuth);
        //replace this.state with this.props.currentUser.
        userRef.onSnapshot(snapshot=>{
          setCurrentUser({
              id: snapshot.id, 
              ...snapshot.data()

          });
            // console.log(this.state);               
        });

      }
      //userAuth=null
      setCurrentUser(userAuth);
      // console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
    return (

      <div>
        <Header />
        <Switch>
        
       <Route exact path="/" component={Homepage}/>
       <Route path="/shop" component={ShopPage} />
       <Route exact path="/signin" render={()=>this.props.currentUser? (<Redirect to="/" />) : (<SignInAndSignUpPage/>)}/>
       <Route exact path="/checkout" component={Checkout}/>
       </Switch>
  
      </div>
  
    );
  
  }

}

const mapStateToProps= createStructuredSelector({

  currentUser: selectCurrentUser,

})

// we will pass null cause we don't need any state props from the reducer
const mapDispatchToProps= dispatch =>({

  setCurrentUser: user => dispatch(setCurrentUser(user))
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
