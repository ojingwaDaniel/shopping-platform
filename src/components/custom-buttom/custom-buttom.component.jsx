import React from "react";
import './custom-buttom.style.scss';
const CustomButton = ({ children, goggleButton, inverted, ...otherProps }) => (
  <button
    className={`${inverted ? "inverted" : ""} ${
      goggleButton ? "goggleBtn" : ""
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
)
export  default CustomButton;