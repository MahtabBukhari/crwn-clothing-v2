import {createContext, useContext, useState} from 'react';


const CartContext = createContext({
    isCartOpen:false,
    setIsCartOpen:()=>{},
})


export const CartContextProvider=({ children })=>{
    const [isCartOpen,setIsCartOpen] = useState(false)

    const value={isCartOpen,setIsCartOpen}

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}


export const UseCartContext=()=>{
    return useContext(CartContext)
}