import React from "react"; 
import "./sign-in.style.scss"; 
import FormInput from "../form-input/form-input.component"
import CustomButton from "../custom-button/custom-button.component";
import {signInWithGoogle , auth} from "../../firebase/firebase.utils";

class SignIn extends React.Component{

    constructor(props){

    super(props);
    
    this.state={
        email:"", 
        password:""
        }

    }

    handleSubmit = async event=>{

        event.preventDefault();


        //destructure email and password from the state
        const {email, password}=this.state; 

        try{
            await auth.signInWithEmailAndPassword(email, password);
        
            this.setState({email: " ", password: " "});
        }
        catch(error){
            console.log(error);
        }

    };

    handleChange = event=>{

        const {value, name} = event.target;

        //this will dynamically set our state, so it will render whatever the value that comes in. if the name is password it will render the password.
        this.setState({[name]:value })
    }

    render(){ 
        return (<div className="sign-in">

            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={this.handleSubmit}>
                <FormInput name="email" type="email" value={this.state.email} handleChange={this.handleChange} label="email" required/>
                <FormInput name="password" type="password" value={this.state.password} handleChange={this.handleChange} label="password" required/>
                <div className="buttons">
                <CustomButton  type="submit">
                    Sign In
                    </CustomButton>
                <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                      Sign in with Google
                </CustomButton>
            </div>
            </form>

        </div>
    )
    }
}

export default SignIn; 