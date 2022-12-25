import {CategoryRouteContainer,RouteTitle} from'./category.styles';

import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-card/product-card.component';
import { useSelector } from 'react-redux';
import { selectCategoriesIsLoading, selectCategoriesMap } from '../../store/categories/categories.selector';
import Spinner from '../../components/spinner/spinner-component';

const Category = () => {
  const categoriesMap = useSelector(selectCategoriesMap)
  const isLoading = useSelector(selectCategoriesIsLoading)
    const {category}= useParams()
    const [products,setProducts]=useState([])
   useEffect(()=>{

    setProducts(categoriesMap[category])

   },[category,categoriesMap])
  return (
    <>
    
    <RouteTitle>{category.toUpperCase()}</RouteTitle>
    {

       isLoading?<Spinner/>:
       
       <CategoryRouteContainer>
   
       {
           products?.map(product=>(
               <ProductCard key={product.id} product={product}/>
           ))
       }
       
       </CategoryRouteContainer>


    }
    </>
  )
}

export default Category