import {CheckoutContainer,TotalAmount} from "./checkout.styles";

import React from "react";
import { UseCartContext } from "../../components/context/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const Checkout = () => {
  const { cartItems,totalAmountCount } = UseCartContext();

  return (
    <CheckoutContainer>
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>

        <div className="header-block">
          <span>Description</span>
        </div>

        <div className="header-block">
          <span>Quantity</span>
        </div>

        <div className="header-block">
          <span>Price</span>
        </div>

        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}

      <TotalAmount>Total: ${totalAmountCount}</TotalAmount>
    </CheckoutContainer>
  );
};

export default Checkout;
