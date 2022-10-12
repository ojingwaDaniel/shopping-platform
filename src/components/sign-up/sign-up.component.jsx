import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-buttom/custom-buttom.component";
import "./sign-up.style.scss";
import { auth, userProfileDocument } from "../../firebase/firebase.util";
class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
  handleSubmit = async event=> {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("password does not match");
      return;
    }
    try {
      const {user} = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await userProfileDocument(user, {displayName});
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } catch (error) {
      console.error(error);
    }
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({[name]: value });
  };
  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <div className="sign-up">
        <h1>i do not have an Account</h1>
        <span>Sign up with your Email and Password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type = 'name'
            label=" Display Name"
            onChange={this.handleChange}
            value={displayName}
            name="displayName"
          />
          <FormInput
            type="email"
            label="Email"
            onChange={this.handleChange}
            value={email}
            name="email"
          />
          <FormInput
            type="password"
            label=" Password"
            onChange={this.handleChange}
            value={password}
            name="password"
          />
          <FormInput
            type="password"
            label="Confirm Password"
            onChange={this.handleChange}
            value={confirmPassword}
            name="confirmPassword"
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
  
}
export default SignUp;
