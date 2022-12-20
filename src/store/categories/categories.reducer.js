import { SET_CATEGORIES_TYPES } from "./categories.types"





const initialState ={
    categoriesMap:{}
}


export const categoriesReducer = (state=initialState, action)=>{
    const {type,payload} = action
    switch (type) {
        case SET_CATEGORIES_TYPES.SET_CATEGORIES_MAP:
            return {
                ...state,
                categoriesMap:payload
            }
        default:
            return state
    }

}