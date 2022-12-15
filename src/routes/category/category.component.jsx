import './category.styles.scss';

import React, { useEffect, useState } from 'react'
import { UseCategoriesContext } from '../../components/context/categories.context';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-card/product-card.component';

const Category = () => {
    const {categoriesMap}= UseCategoriesContext();
    const {category}= useParams()
    const [products,setProducts]=useState([])
   useEffect(()=>{

    setProducts(categoriesMap[category])

   },[category,categoriesMap])
  return (
    <>
    
    <div className='route-title'>{category.toUpperCase()}</div>
    
    <div className='category-route-container'>

    {
        products?.map(product=>(
            <ProductCard key={product.id} product={product}/>
        ))
    }
    
    </div>
    </>
  )
}

export default Category