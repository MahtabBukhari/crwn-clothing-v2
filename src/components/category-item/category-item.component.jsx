import React from 'react'
import {CategoryBackgroundImage,CategoryBodyContainer,CategoryContainer} from './category-item.styles'

const CategoryItem = ({category}) => {
    const {imageUrl,title} = category;
  return (
    <CategoryContainer>
    <CategoryBackgroundImage imageUrl={imageUrl}/>
     <CategoryBodyContainer>
       <h2>{title}</h2>
       <p>Shop Now</p>
     </CategoryBodyContainer>
   </CategoryContainer>
  )
}

export default CategoryItem