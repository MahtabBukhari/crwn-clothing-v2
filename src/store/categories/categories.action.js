import { createAction } from "../../components/createAction"
import { getCollectionsAndDocuments } from "../../utiles/firebase/firebase.utiles"
import { SET_CATEGORIES_TYPES } from "./categories.types"


const fetchCategoriesStart=()=>
    createAction(SET_CATEGORIES_TYPES.FETCH_CATEGORIES_START)


const fetchCategoriesSuccess=(gategoriesArray)=>
    createAction(SET_CATEGORIES_TYPES.FETCH_CATEGORIES_SUCCESS,gategoriesArray)


const fetchCategoriesfailed =(error)=>
    createAction(SET_CATEGORIES_TYPES.FETCH_CATEGORIES_FAILED,error)







export const fetchCategoriesAsync = ()=>async(dispatch)=>{

dispatch(fetchCategoriesStart())
    try {
        const gategoriesArray = await getCollectionsAndDocuments()
        dispatch(fetchCategoriesSuccess(gategoriesArray))
    } catch (error) {
        dispatch(fetchCategoriesfailed(error))
    }
}