import React from "react";
import {  connect } from "react-redux";
import {createStructuredSelector} from "reselect";
import { ReactComponent as Logo } from "../../assets/crwn.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart/cart.component"
import {selectCartHidden} from "../../redux/cart/cart.selectors";
import {selectCurrentUser} from "../../redux/user/user.selector";
import {HeaderContainer, LogoContainer,OptionsContainer,OptionLink} from "./header.styles";
import {signOutStart} from "../../redux/user/user.action";


//after importing auth we will destructure the current user property. 
const Header= ({currentUser, hidden, signOutStart})=>(

    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className="logo"/>

        </LogoContainer>

        <OptionsContainer>
   
            <OptionLink to ="/shop">
                SHOP
            </OptionLink>
            <OptionLink to ="/contact">
                CONTACT
            </OptionLink>
            {currentUser ? (
        <OptionLink as ="div" onClick={signOutStart}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to='/signin'>
          SIGN IN
        </OptionLink>
      )}
      <CartIcon />

        </OptionsContainer>
        {
          hidden? null : <CartDropdown />
        }
        
    </HeaderContainer>
)
// this state is the root reducer. createStructuredSelector replaces state
const mapStateToProps= createStructuredSelector({

  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

const mapDispatchToProps= dispatch =>({
  signOutStart: ()=>dispatch(signOutStart())
})



export default connect(mapStateToProps, mapDispatchToProps)(Header);