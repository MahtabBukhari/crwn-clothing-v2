import './cart-dropdown.styles.scss'

import React from 'react'
import Button from '../button/button.component'
import { UseCartContext } from '../context/cart.context'

const CartDropdown = () => {
    const {cartItems}=UseCartContext()
  return (
    <div className='cart-dropdown-container'>
    <div className='cart-items'>

    {
        cartItems.map(cartItems =>{
            const{id,name,quantity} =cartItems
           return <div key={id}>
           <h1>{name}</h1>
           <span>{quantity}</span>
           </div>
        })
    }
    
    </div>
  
    
    <Button>CHECKOUT</Button>
    </div>
  )
}

export default CartDropdown