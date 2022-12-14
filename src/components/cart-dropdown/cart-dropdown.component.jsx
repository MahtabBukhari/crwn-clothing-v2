import './cart-dropdown.styles.scss'

import React from 'react'
import Button from '../button/button.component'
import { UseCartContext } from '../context/cart.context'
import CartItems from '../cart-item/cart-item.component'

const CartDropdown = () => {
    const {cartItems}=UseCartContext()
  return (
    <div className='cart-dropdown-container'>
    <div className='cart-items'>

    {
        cartItems.map(cartItem =>(
          <CartItems key={cartItem.id} cartItem={cartItem} />
        ))
    }
    
    </div>
  
    
    <Button>CHECKOUT</Button>
    </div>
  )
}

export default CartDropdown