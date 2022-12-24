import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addItemsToCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';
import Button, { BUTTONTYPE_OF_CLASSES } from '../button/button.component';

import {ProductCardContainer} from './product-card.styles'

const ProductCard = ({product}) => {
    const {name,imageUrl,price} = product;
    const cartItems = useSelector(selectCartItems)
    const dispatch = useDispatch()
   
const addToCart=()=> dispatch(addItemsToCart(cartItems,product))

  return (
    <ProductCardContainer>
    <img src={imageUrl} alt={`${name}`}/>
    <div className='footer'>
    <span className='name'>{name}</span>
    <span className='price'>{price}</span>
    </div>
    <Button buttonType={BUTTONTYPE_OF_CLASSES.inverted} onClick={addToCart}>Add to Card</Button>
    </ProductCardContainer>
  )
}

export default ProductCard