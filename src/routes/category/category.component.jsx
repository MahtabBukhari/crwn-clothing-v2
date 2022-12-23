import {CategoryRouteContainer,RouteTitle} from'./category.styles';

import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-card/product-card.component';
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/categories.selector';

const Category = () => {
  const categoriesMap = useSelector(selectCategoriesMap)
    const {category}= useParams()
    const [products,setProducts]=useState([])
   useEffect(()=>{

    setProducts(categoriesMap[category])

   },[category,categoriesMap])
  return (
    <>
    
    <RouteTitle>{category.toUpperCase()}</RouteTitle>
    
    <CategoryRouteContainer>

    {
        products?.map(product=>(
            <ProductCard key={product.id} product={product}/>
        ))
    }
    
    </CategoryRouteContainer>
    </>
  )
}

export default Category