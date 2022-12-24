import { cartActionTypes } from "./cart.types"


const intialState={
    isCartOpen:false,
    cartItems:[],
    
  }
  

  
  export const cartReducer =(state=intialState,action)=>{
    const {type,payload}= action
    switch(type){
  
    case cartActionTypes.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload
      }
      case cartActionTypes.SET_CART_OPEN:
        return{
          ...state,
          isCartOpen:payload
        }
      
      default:
        return state
  
    }
  }