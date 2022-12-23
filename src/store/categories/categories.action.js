import { createAction } from "../../components/createAction"
import { SET_CATEGORIES_TYPES } from "./categories.types"

export const setCategoriesAction=(categoriesArray)=>{

    return createAction(SET_CATEGORIES_TYPES.SET_CATEGORIES,categoriesArray)

}