import "./cart-icon.styles.jsx";

import React from "react";

import {CartIconContainer,ShoppingBagIcon, ItemCount} from './cart-icon.styles'
import { useDispatch, useSelector } from "react-redux";
import { selectCartCount, selectCartIsOpen } from "../../store/cart/cart.selector.js";
import { setIsCartOpen } from "../../store/cart/cart.action.js";

const CartIcon = () => {
  const dispatch = useDispatch()
  const cartCount= useSelector(selectCartCount)
  const isCartOpen=useSelector(selectCartIsOpen)

  console.log(isCartOpen)
  const toggleIsCartOpen = ()=> dispatch(setIsCartOpen(!isCartOpen))
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingBagIcon/>
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
