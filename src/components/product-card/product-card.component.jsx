import React from 'react'
import Button, { BUTTONTYPE_OF_CLASSES } from '../button/button.component';
import { UseCartContext } from '../context/cart.context';
import './product-card.styles.scss'

const ProductCard = ({product}) => {
    const {name,imageUrl,price} = product;
    const {addItemsToCart}=UseCartContext()
const addToCart=()=> addItemsToCart(product)

  return (
    <div className='product-card-container'>
    <img src={imageUrl} alt={`${name}`}/>
    <div className='footer'>
    <span className='name'>{name}</span>
    <span className='price'>{price}</span>
    </div>
    <Button buttonType={BUTTONTYPE_OF_CLASSES.inverted} onClick={addToCart}>Add to Card</Button>
    </div>
  )
}

export default ProductCard