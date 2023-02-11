import React from 'react'
import './cart.item.style.scss'
const cartItem = ({item : {imageUrl,name,price,quantity}})=>(
       <div className='cart-item'>
         <img src = {imageUrl} alt = 'item'/> 
         <div className = 'item-details'>
            <spam className = 'name'> {name}<spam/>
            <spam className = 'price'>{quantity} x ${price}<spam/>
        <div/>
       <div/>
);
