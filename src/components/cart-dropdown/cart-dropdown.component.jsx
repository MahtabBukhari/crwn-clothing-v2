
import React from "react";
import Button, { BUTTONTYPE_OF_CLASSES } from "../button/button.component";

import CartItems from "../cart-item/cart-item.component";
import { useNavigate } from "react-router-dom";
import { EmptyMassage,CartDropdownContainer,CartItem } from "./cart-dropdown.styles";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";

const CartDropdown = () => {
  const navigate = useNavigate()
  const checkoutHandler = ()=> navigate('/checkout')

  const  cartItems  = useSelector(selectCartItems)
  return (
    <CartDropdownContainer>
      <CartItem>

        {cartItems.length?cartItems.map((cartItem) => (
          <CartItems key={cartItem.id} cartItem={cartItem} />
        )):<EmptyMassage>Your Cart is Empty</EmptyMassage>}
      </CartItem>

      <Button style={{margin:'auto'}} buttonType={BUTTONTYPE_OF_CLASSES.base} onClick={checkoutHandler}>CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
