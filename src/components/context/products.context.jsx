import {createContext, useContext, useEffect, useState} from 'react';
import {SHOP_DATA} from '../../shop-data.js'
import { addCollectionAndDocuments } from '../../utiles/firebase/firebase.utiles.js';

const ProductContext = createContext({})


export const ProductContextProvider =({children})=>{
    const [products]=useState([])
    useEffect(()=>{
                addCollectionAndDocuments('categories',SHOP_DATA)
    },[])
 
const value={products}
return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}


export const UseProductContext = ()=>{
    return useContext(ProductContext)
}