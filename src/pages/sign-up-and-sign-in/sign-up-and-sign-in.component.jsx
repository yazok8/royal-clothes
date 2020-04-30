import React from "react";
import {SigninAndSignupContainer} from "./sign-up-and-sign-in.styles";
import SignIn from "../../components/sign-in/sign-in.component"
import SignUp from "../../components/sign-up/sign-up.component";

const SignInAndSignUpPage=()=>(

    <SigninAndSignupContainer>
        <SignIn />
        <SignUp/>
    </SigninAndSignupContainer>
)

export default SignInAndSignUpPage;