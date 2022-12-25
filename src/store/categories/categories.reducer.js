import { SET_CATEGORIES_TYPES } from "./categories.types"





const initialState ={
    categories:[],
    isLoading:false,
    error:''
}


export const categoriesReducer = (state=initialState, action)=>{
    const {type,payload} = action
    switch (type) {
        case SET_CATEGORIES_TYPES.FETCH_CATEGORIES_START:
            return{
                ...state,
                isLoading:true
            }
        case SET_CATEGORIES_TYPES.FETCH_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories:payload
            }
        case SET_CATEGORIES_TYPES.FETCH_CATEGORIES_FAILED:
            return{
                ...state,
                isLoading:false,
                error:payload
            }
        default:
            return state
    }

}