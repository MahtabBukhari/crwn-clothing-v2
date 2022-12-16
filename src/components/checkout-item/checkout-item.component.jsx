import { UseCartContext } from "../context/cart.context";
import {CheckoutItemContainer} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { deleteItemFromCart, removeItemsFromCart, addItemsToCart } =
    UseCartContext();

    const clearItemFormCart = () => deleteItemFromCart(cartItem);
  const decrimentOrRemoveItemFromCart = () => removeItemsFromCart(cartItem);
  const incrementItemInCart = () => addItemsToCart(cartItem);

  return (
    <CheckoutItemContainer>
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={decrimentOrRemoveItemFromCart}>
          &#10094;
        </div>
        <div className="value">{quantity}</div>
        <div className="arrow" onClick={incrementItemInCart}>
          &#10095;
        </div>
      </span>
      <span className="price">${price}</span>
      <span
        className="remove-button"
        onClick={clearItemFormCart}
      >
        &#10005;
      </span>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
