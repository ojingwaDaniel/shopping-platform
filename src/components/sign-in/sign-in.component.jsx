import React from "react";
import './sign-in.style.scss'
class SignIn extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email : '',
            password : ''
        }
    }
    render(){
        return(
            <div>
                <h1>i already have an account</h1>
                <span>Sign in with your email and password</span>
                <form action="">
                    <input type="email" name="email" id="" />
                    <label htmlFor="">Email</label>
                    <input type="password" name="password" id="" />
                    <label htmlFor="">Password</label>
                </form>
            </div>
        )
    }
}
export default SignIn