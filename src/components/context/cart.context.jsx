import { createContext, useContext, useReducer, useState } from "react";

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

const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemsToCart: () => {},
  removeItemsFromCart: () => {},
  deleteItemFromCart:()=>{},
  totalAmountCount:0,
  cartCount: 0,
});

const cartConstantTypes={
  SET_CART_ITEMS:'SET_CART_ITEMS',
  SET_CART_OPEN:"SET_CART_OPEN"
}

const cartReducer =(state,action)=>{
  const {type,payload}= action
  switch(type){

  case cartConstantTypes.SET_CART_ITEMS:
    return {
      ...state,
      ...payload
    }
    case cartConstantTypes.SET_CART_OPEN:
      return{
        ...state,
        isCartOpen:payload
      }
    
    default:
      throw new Error('type is not defined in cartReducer')

  }
}


const intialState={
  isCartOpen:false,
  cartItems:[],
  cartCount:0,
  totalAmountCount:0,
}

export const CartContextProvider = ({ children }) => {
  
  const [state,dispatch]=useReducer(cartReducer,intialState)
  const {cartItems, cartCount,totalAmountCount,isCartOpen}=state

  
  const updateCartItems = (cartItems)=>{
 const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
 const totalAmountCount= cartItems.reduce((totalAmount, item) => totalAmount + item.quantity * item.price, 0);

const cartValue = {
  cartCount,
  totalAmountCount,
  cartItems
}

dispatch({type:cartConstantTypes.SET_CART_ITEMS, payload:cartValue})

}

const setIsCartOpen=(bool)=>{

  dispatch({type:cartConstantTypes.SET_CART_OPEN,payload:bool})

}

  //That is the function which is used to catch the product from productCard and add it to the cartItems
  const addItemsToCart = (productToAdd) => {
    updateCartItems(addToCart(cartItems, productToAdd));
  };
  const removeItemsFromCart = (removeCartItem) => {
    updateCartItems(removeFromCart(cartItems, removeCartItem));
  };

  const deleteItemFromCart = (deleteCartItem) => {
    updateCartItems(deleteFromCart(cartItems, deleteCartItem));
  }

  const value = {
    isCartOpen,
    setIsCartOpen,
    removeItemsFromCart,
    addItemsToCart,
    deleteItemFromCart,
    totalAmountCount,
    cartItems,
    cartCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const UseCartContext = () => {
  return useContext(CartContext);
};
