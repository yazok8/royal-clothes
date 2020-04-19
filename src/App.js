import React from "react";
import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import {Route, Switch} from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component.jsx";
import SignInAndSignUpPage from "./pages/sign-up-and-sign-in/sign-up-and-sign-in.component.jsx"
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";

/* this route takes these three options, when "exact" is not give a value it means that it's true by default */

// The switch allows to follow a pattern where we know that as long as one route matches then that's the only thing we're going to render.
  //in order to have access to the state, we will convert the app to a class components 
class App extends React.Component {

  constructor(){
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // this.setState({ currentUser: user });


      //userAuth!=null
      if(userAuth){
        const userRef = await  createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot=>{
          this.setState({
            currentUser: {
              id: snapshot.id, 
              ...snapshot.data()
            }
       
          });
            // console.log(this.state);               
        });

      }
      //userAuth=null
      this.setState({currentUser: userAuth});
      // console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
    return (

      <div>
        <Header currentUser= {this.state.currentUser} />
        <Switch>
        
       <Route exact path="/" component={Homepage}/>
       <Route path="/shop" component={ShopPage} />
       <Route path="/signin" component={SignInAndSignUpPage}/>
       </Switch>
  
      </div>
  
    );
  
  }

}

export default App;
