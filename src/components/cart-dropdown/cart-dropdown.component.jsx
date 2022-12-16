import "./cart-dropdown.styles.scss";

import React from "react";
import Button, { BUTTONTYPE_OF_CLASSES } from "../button/button.component";
import { UseCartContext } from "../context/cart.context";
import CartItems from "../cart-item/cart-item.component";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const navigate = useNavigate()
  const checkoutHandler = ()=> navigate('/checkout')
  const { cartItems } = UseCartContext();
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItems key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>

      <Button buttonType={BUTTONTYPE_OF_CLASSES.base}onClick={checkoutHandler}>CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
