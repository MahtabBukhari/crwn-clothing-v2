import { setCurrentUserConstantType } from "./user.types"

export const setCurrentUser=(user)=>{
 return   {type:setCurrentUserConstantType.SET_CURRENT_USER,payload:user}
   }
  