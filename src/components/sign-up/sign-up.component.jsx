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
      confirmPassword : ""
    };
  }
  render(){
    return(
        <div className="sign-up">
            <h1>sig</h1>
        </div>
    )
  }
}
