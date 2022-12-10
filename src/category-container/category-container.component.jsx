import React from 'react'
import CategoryItem from '../components/category-item/category-item.component'
import './category-container.styles.scss'

const CategoryContainer = ({categories}) => {
  return (
    <div className='categories-container'>
    {categories.map((category) =>(

    <CategoryItem key={category.id} category={category}/>
    ))
    
    
    }
    </div>
  )
}

export default CategoryContainer