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
    handleSubmit = event=>{
        event.preventDefault()
        this.setState({ email: "", password: "" });
    }
    handleChange = event=>{
        const {value,name} = event.target
        this.setState({[name]: value})
    }
        
    render(){
        return (
          <div>
            <h1>i already have an account</h1>
            <span>Sign in with your email and password</span>
            <form action="" onSubmit={this.handleSubmit}>
              <input
                type="email"
                name="email"
                id=""
                value={this.state.email}
                onChange={this.handleChange}
              />
              <label htmlFor="">Email</label>
              <input
                type="password"
                name="password"
                id=""
                value={this.state.password}
                required
                onChange={this.handleChange}
              />
              <label htmlFor="">Password</label>
              <input type="submit" value="submit form" />
            </form>
          </div>
        );
    }
}
export default SignIn