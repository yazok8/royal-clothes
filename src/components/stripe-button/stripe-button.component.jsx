import React from "react"; 
import StripeCheckout from "react-stripe-checkout"; 

const StripCheckoutButton=({price})=> {

    const PriceForStripe= price * 100; 

    const publishableKey= "pk_test_lDVOZ5Hyz2nVUGaTrnjVFSSK00ahRwsLuM";

    const onToken= token =>{
        console.log(token); 
        alert("payment successful");    
    }

    return (
        <StripeCheckout
        
        label="Pay Now"
        name="Royal Clothing"
        billingAddress
        shippingAddress 
        image="https://sendeyo.com/up/d/f3eb2117da"
        description={`Your total price is $${price}`}
        amount={PriceForStripe}
        panelLabel= "Pay Now"
        token={onToken}
        stripeKey={publishableKey}

        />
    )
}

export default StripCheckoutButton;