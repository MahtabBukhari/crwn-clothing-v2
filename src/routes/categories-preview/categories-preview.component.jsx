
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CategoryPreview from "../../components/category-preview/category-preview.component";
import { setCategoriesAction } from "../../store/categories/categories.action";

import { getCollectionsAndDocuments } from "../../utiles/firebase/firebase.utiles";



const CategoriesPreview = () => {
  const categoriesMap = useSelector(state=>state.categories.categoriesMap)
  const dispatch = useDispatch()
  useEffect(()=>{
    const getCategoriesMap =async()=>{
     
        const gategoryMap = await getCollectionsAndDocuments()
       
       dispatch( setCategoriesAction(gategoryMap))
     }
     getCategoriesMap()
 },[])

  

    return (
      <div>
        {Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title]
        return <CategoryPreview key={title} title={title} products={products}/>
        })}
      </div>
    );
}

export default CategoriesPreview
