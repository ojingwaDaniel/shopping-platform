import React from "react";
import './custom-buttom.style.scss'
const CustomButton = ({children,...otherchildrenProps})=>(
    <button className="custom-button">
        {children}
    </button>
)
export  default CustomButton