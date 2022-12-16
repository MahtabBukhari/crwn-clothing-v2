import React from 'react'
import { useNavigate } from 'react-router-dom';
import {CategoryBackgroundImage,CategoryBodyContainer,CategoryContainer} from './category-item.styles'

const CategoryItem = ({category}) => {
    const {imageUrl,title,route} = category;
    const navigation = useNavigate()
    const onClickNavigation =()=> navigation(route)
  return (
    <CategoryContainer onClick={onClickNavigation}>
    <CategoryBackgroundImage imageUrl={imageUrl}/>
     <CategoryBodyContainer>
       <h2>{title}</h2>
       <p>Shop Now</p>
     </CategoryBodyContainer>
   </CategoryContainer>
  )
}

export default CategoryItem