
import { createSelector } from "reselect";

const selectCategoriesReducer = (state)=> state.categories

export const selectCategories =createSelector(
   [selectCategoriesReducer],
   (categoriesSlice)=> categoriesSlice.categories
)


export const selectCategoriesMap=createSelector(
   [selectCategories],
   (categories)=> categories.reduce((acc, category)=>{

      const {title, items} = category
  
         //put each item list to respective category name in object
      acc[title.toLowerCase()] = items;
  
      return acc;
  
  
    },{})
)

export const selectCategoriesIsLoading = createSelector(
   [selectCategoriesReducer],
   (categoriesSlice)=> categoriesSlice.isLoading
   
   )
