import React from "react";
import CustomButton from "../custom-buttom/custom-buttom.component"
import '../cart.dropdown/cart.dropdown.style.scss'
const CartDropdown = ()=>(
    <div className="cart-dropdown">
        <div className="cart-items"/>
        <CustomButton>GO TO CHECKOUT</CustomButton>


    </div>
)
export default CartDropdown