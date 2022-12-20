import { createAction } from "../../components/createAction"
import { setCurrentUserConstantType } from "./user.types"

export const setCurrentUserAction=(user)=>{
 return createAction(setCurrentUserConstantType.SET_CURRENT_USER,user)  
   }
  