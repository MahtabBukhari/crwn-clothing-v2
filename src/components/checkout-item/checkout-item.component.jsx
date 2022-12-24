import { useDispatch, useSelector } from "react-redux";
import { addItemsToCart, deleteItemFromCart, removeItemsFromCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import {CheckoutItemContainer} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const cartItems = useSelector(selectCartItems)
  const dispatch = useDispatch()
 

    const clearItemFormCart = () => dispatch(deleteItemFromCart(cartItems,cartItem))
  const decrimentOrRemoveItemFromCart = () => dispatch(removeItemsFromCart(cartItems,cartItem))
  const incrementItemInCart = () => dispatch(addItemsToCart(cartItems,cartItem))

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
