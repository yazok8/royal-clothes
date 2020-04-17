import React from "react"; 
import "./custom-button.style.scss"; 

//Create stateless functional component

//in order to pass the form inputs etc to the button we have use the children of the props

const CustomButton = ({children, isGoogleSignIn, ...otherProps})=>(

    <button className={`${isGoogleSignIn ? "google-sign-in": ""}  custom-button`}
    {...otherProps}>

       { children}


    </button>
)

export default CustomButton;