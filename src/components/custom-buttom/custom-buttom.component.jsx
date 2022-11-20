import React from "react";
import './custom-buttom.style.scss';
const CustomButton = ({ children, goggleButton, ...otherProps }) => (
  <button
    className={`${goggleButton ? "goggleBtn" : ''} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
)
export  default CustomButton