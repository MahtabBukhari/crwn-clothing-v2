import "./cart-icon.styles.scss";
import { ReactComponent as ShopingBag } from "../../assets/shopping-bag.svg";
import React from "react";
import { UseCartContext } from "../context/cart.context";


const CartIcon = () => {
  const {cartCount}= UseCartContext()
  const {isCartOpen,setIsCartOpen}=UseCartContext()
  const toggleIsCartOpen = ()=> setIsCartOpen(!isCartOpen)
  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShopingBag className="shopping-icon"/>
      <div className="item-count">{cartCount}</div>
    </div>
  );
};

export default CartIcon;
