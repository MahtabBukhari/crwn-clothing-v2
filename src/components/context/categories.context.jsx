// import {SHOP_DATA} from '../../shop-data.js'  // no more need it just used to apload it to firebase 
import {createContext, useContext, useEffect, useState} from 'react';
import { getCollectionsAndDocuments } from '../../utiles/firebase/firebase.utiles.js';

const CategoriesContext = createContext({
 categoriesMap:{}
})


export const CategoriesContextProvider =({children})=>{
    const [categoriesMap,setCategoriesMap]=useState([])
    useEffect(()=>{
       const getCategoriesMap =async()=>{
        
           const gategoryMap = await getCollectionsAndDocuments()
           console.log(gategoryMap)
           setCategoriesMap(gategoryMap)
        }
        getCategoriesMap()
    },[])
 
const value={categoriesMap}
return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}


export const UseCategoriesContext = ()=>{
    return useContext(CategoriesContext)
}