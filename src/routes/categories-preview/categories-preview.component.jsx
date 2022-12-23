
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CategoryPreview from "../../components/category-preview/category-preview.component";
import { setCategoriesAction } from "../../store/categories/categories.action";
import { selectCategoriesMap } from "../../store/categories/categories.selector";

import { getCollectionsAndDocuments } from "../../utiles/firebase/firebase.utiles";



const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap)
  const dispatch = useDispatch()
  useEffect(()=>{
    const getCategories =async()=>{
     
        const gategoriesArray = await getCollectionsAndDocuments()
      
       dispatch( setCategoriesAction(gategoriesArray))
     }
     getCategories()
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
