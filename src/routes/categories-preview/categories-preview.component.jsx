
import React from "react";

import CategoryPreview from "../../components/category-preview/category-preview.component";
import { UseCategoriesContext } from "../../components/context/categories.context";



const CategoriesPreview = () => {
    const { categoriesMap } = UseCategoriesContext();

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
