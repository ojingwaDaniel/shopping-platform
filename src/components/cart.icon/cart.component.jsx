import { React } from 'react';
import './cart.style.scss';
import {ReactComponent as shoppingIcon} from '../../assets/11.2 shopping-bag.svg.svg'
 
const CartIcon = ()=>(
    <div className='cart-icon'>
        <shoppingIcon className = 'shopping-icon'/>
        <span className='item-count'>0</span>

    </div>
)
export default CartIcon