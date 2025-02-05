import { createAction } from "../../components/createAction";
import { cartActionTypes } from "./cart.types";



const addToCart = (cartItems, productToAdd) => {
    //Find that is cartItems contains the productToAdd
  
    const existCartItem = cartItems.find(
      (cartItem) => cartItem.id === productToAdd.id
    );
  
    //If productToAdd is exists then increment its quantity only
    if (existCartItem) {
      return cartItems.map((cartItem) =>
        cartItem.id === productToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
  
    //If productToAdd is not exists then add it to array and define its quantity and return new array
  
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  };
  
  
  const removeFromCart=(cartItems, removeCartItem) => {
    // find that item is exists or not 
    const existCartItem = cartItems.find(cartItem=> cartItem.id === removeCartItem.id)
  
  
  
    //if count is equal to 1 then remove it from cart
  
    if(existCartItem.quantity === 1){
      return cartItems.filter(cartItem=> cartItem.id !== removeCartItem.id)
    }
  
  
    //ohterwise decrease quantity
    return cartItems.map((cartItem) =>
        cartItem.id === removeCartItem.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );
  }
  
  
  
  const deleteFromCart=(cartItems, deleteCartItem)=>{
    const cartIatemExists = cartItems.find(cartItem => cartItem.id === deleteCartItem.id)
  
  if (cartIatemExists){
    return cartItems.filter(cartItem => cartItem.id !== deleteCartItem.id)
  }
  
  
  
  }
  




  /// action creator



  export const setIsCartOpen=(boolean)=>{

   return createAction(cartActionTypes.SET_CART_OPEN, boolean)

    
  
  }


  //That is the function which is used to catch the product from productCard and add it to the cartItems
  export const addItemsToCart = (cartItems,productToAdd) => {
          const newCartItems =  addToCart(cartItems, productToAdd)
        return createAction(cartActionTypes.SET_CART_ITEMS, newCartItems)

  };
  export const removeItemsFromCart = (cartItems,removeCartItem) => {
    const newCartItems  = removeFromCart(cartItems, removeCartItem)
    return createAction(cartActionTypes.SET_CART_ITEMS, newCartItems)
  };

  export const deleteItemFromCart = (cartItems,deleteCartItem) => {
    const newCartItems = deleteFromCart(cartItems, deleteCartItem)
    return createAction(cartActionTypes.SET_CART_ITEMS, newCartItems)
  }
