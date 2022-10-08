import React from "react";
import './sign-in.style.scss'
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-buttom/custom-buttom.component";
import {auth, signInWithGoogle } from '../../firebase/firebase.util';
class SignIn extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email : '',
            password : ''
        }
    }
    handleSubmit =  async event=>{
        event.preventDefault();
        const {email,password} = this.state;
        try {
          await auth.signInWithEmailAndPassword(email, password);
          this.setState({ email:'', password:''});
          
        } catch (error) {
          console.log(error)
          
        }
        
    }
    handleChange = event=>{
        const {value,name} = event.target
        this.setState({[name]: value})
    }
        
    render(){
        return (
          <div className="sign-in">
            <h1>i already have an account</h1>
            <span>Sign in with your email and password</span>
            <form action="" className="sign-up-form" onSubmit={this.handleSubmit}>
              <FormInput
                type="email"
                name="email"
                value={this.state.email}
                handleChange={this.handleChange}
                label="Email"
                required
              />
              <FormInput
                type="password"
                name="password"
                value={this.state.password}
                required
                handleChange={this.handleChange}
                label="Password"
              />
              <div className="buttons">
                <CustomButton type="submit"> SIGN IN</CustomButton>
                <CustomButton onClick={signInWithGoogle} goggleButton> SIGN IN GOGGLE
                </CustomButton>
              </div>
            </form>
          </div>
        );
    }
}
export default SignIn