import { createContext, useContext, useEffect, useState } from "react";

const addToCart = (cartItems, productToAdd) => {
  //Find that is cartItems contains the productToAdd

  const isProductExist = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  //If productToAdd is exists then increment its quantity only
  if (isProductExist) {
    return cartItems.map((cartItem) =>(
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    ));
  }

  //If productToAdd is not exists then add it to array and define its quantity and return new array

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemsToCart: () => {},
  cartCount:0
});

export const CartContextProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] =useState(0)

 useEffect(()=>{
   
  setCartCount( cartItems.reduce((total, item) =>(
     total + item.quantity
   ),0))
    
 },[cartItems])
    


  console.log(cartCount)

  //That is the function which is used to catch the product from productCard and add it to the cartItems
  const addItemsToCart = (productToAdd) => {
    setCartItems(addToCart(cartItems, productToAdd));
  };

  const value = { isCartOpen, setIsCartOpen, addItemsToCart, cartItems,cartCount };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const UseCartContext = () => {
  return useContext(CartContext);
};
