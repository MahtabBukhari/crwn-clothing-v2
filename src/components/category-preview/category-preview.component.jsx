import {CategoryPreviewContainer} from './category-preview.styles';

import React from 'react'
import ProductCard from '../product-card/product-card.component';
import { Link } from 'react-router-dom';

const CategoryPreview = ({title, products}) => {
  return (
    <CategoryPreviewContainer>
    <h2><Link className='title' to={title}>{title}</Link></h2>
    <div className='preview'>
    {
        products.filter((_,indx)=> indx < 4 ).map(product=>(
            <ProductCard key={product.id} product={product} />
        ))
    }
    </div>
    </CategoryPreviewContainer>
  )
}

export default CategoryPreview