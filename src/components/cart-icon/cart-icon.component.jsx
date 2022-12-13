import "./cart-icon.styles.scss";
import { ReactComponent as ShopingBag } from "../../assets/shopping-bag.svg";
import React from "react";

const CartIcon = () => {
  return (
    <div className="cart-icon-container">
      <ShopingBag className="shopping-icon"/>
      <div className="item-count">0</div>
    </div>
  );
};

export default CartIcon;
