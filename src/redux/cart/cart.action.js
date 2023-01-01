import CartActionType from "./cart.types"
export const ToggleCartHidden = ()=>({
  type : CartActionType.TOGGLE_CART_HIDDEN
})
export const addItem = item =>({
  type : CartActionType.ADD_CART_ITEMS,
  payload : item
})