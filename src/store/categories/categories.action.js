import { createAction } from "../../components/createAction"
import { SET_CATEGORIES_TYPES } from "./categories.types"

export const setCategoriesAction=(categories)=>{

    return createAction(SET_CATEGORIES_TYPES.SET_CATEGORIES_MAP,categories)

}