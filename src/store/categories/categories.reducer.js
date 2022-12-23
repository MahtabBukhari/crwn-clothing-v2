import { SET_CATEGORIES_TYPES } from "./categories.types"





const initialState ={
    categories:[]
}


export const categoriesReducer = (state=initialState, action)=>{
    const {type,payload} = action
    switch (type) {
        case SET_CATEGORIES_TYPES.SET_CATEGORIES:
            return {
                ...state,
                categories:payload
            }
        default:
            return state
    }

}