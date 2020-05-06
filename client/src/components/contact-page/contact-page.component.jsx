import React, {useState} from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from"../custom-button/custom-button.component"; 
import axios from "axios";
import {ContactUsContainer, ContactPageTitle} from "./contact-page.styles"

const SendEmail = () => {
 
    const [userDetails, setUserDetails]= useState({
      name:"",
      email:"",
      message:"",
  
      
  });
  
  const {name, email, message}=userDetails;
  const handleSubmit = event => {
  
    event.preventDefault();
    
      axios.post("/contact",{
        name: userDetails.name, 
        email: userDetails.email, 
        message: userDetails.message
        })
    .then(function (response) {
      console.log(response)
  })
  .catch(function (error) {
      console.log(error)
  }) 

  setUserDetails({
      name:"", 
      email:"", 
      message:""
  })
 
  }
  
  
  const handleChange = event=>{
  
    const{name, value }=event.target
  
  setUserDetails({...userDetails,[name]: value});
  
  }
  
  
    return (
        <ContactUsContainer>
            <ContactPageTitle>Contact Us</ContactPageTitle>
      <form onSubmit={handleSubmit}>
      <FormInput 
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            label="name" 
            required
            />
                 <FormInput 
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            label="Email" 
            required
            />
                 <FormInput 
            type="textarea"
            name="message"
            value={message}
            onChange={handleChange}
            label="message" 
            required
            />
     <CustomButton>Submit</CustomButton>
      </form>
      </ContactUsContainer>
    );
    }

    export default SendEmail;