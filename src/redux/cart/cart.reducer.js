import CartActionType from "./cart.types";
import {addCartItem} from './cart.util.js';
const INITIAL_STATE = {
    hidden : true,
    cartItems: []
};
 

const CartReducer = (state = INITIAL_STATE,action)=>{
  switch(action.type){
    case CartActionType.TOGGLE_CART_HIDDEN:
      return{
        ...state,
        hidden : !state.hidden
      }
    case CartActionType.ADD_ITEMS:
      return{
        ...state,
        cartItems:addCartItem(state.cartItems,action.payload)
      }  
    default:
      return state;
  }
};

export default CartReducer