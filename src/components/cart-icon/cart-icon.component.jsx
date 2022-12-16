import "./cart-icon.styles.jsx";

import React from "react";
import { UseCartContext } from "../context/cart.context";
import {CartIconContainer,ShoppingBagIcon, ItemCount} from './cart-icon.styles'

const CartIcon = () => {
  const {cartCount}= UseCartContext()
  const {isCartOpen,setIsCartOpen}=UseCartContext()
  const toggleIsCartOpen = ()=> setIsCartOpen(!isCartOpen)
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingBagIcon/>
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
