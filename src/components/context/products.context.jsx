import {createContext, useContext, useState} from 'react';
import PRODUCTS from '../../shop-data.json'

const ProductContext = createContext({})


export const ProductContextProvider =({children})=>{
    const [products,setProducts]=useState(PRODUCTS)
 
const value={products}
return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}


export const UseProductContext = ()=>{
    return useContext(ProductContext)
}