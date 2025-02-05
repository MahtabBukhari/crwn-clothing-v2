import { createSelector } from "reselect";


const selectCartReducer = state=> state.cart

export const selectCartItems = createSelector(
    [selectCartReducer],
    (cart)=>cart.cartItems
)


export const selectCartIsOpen = createSelector(
    [selectCartReducer],
    (cart)=> cart.isCartOpen
)


export const selectCartCount = createSelector(

    [selectCartItems],
    (cartItems)=>cartItems.reduce((total, item) => total + item.quantity, 0)
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems)=> cartItems.reduce((totalAmount, item) => totalAmount + item.quantity * item.price, 0)
)


 

