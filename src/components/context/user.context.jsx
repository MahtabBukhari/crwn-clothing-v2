import { createContext, useContext, useEffect, useReducer} from "react";
import { createUserDocumentfromAuth, onAuthStateChangedListener } from "../../utiles/firebase/firebase.utiles";

const userContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

const setCurrentUserConstantType={
  SET_CURRENT_USER:"SET_CURRENT_USER"

}

const userReducer =(state,action)=>{
const {type,payload}=action
  switch(type){
    case setCurrentUserConstantType.SET_CURRENT_USER:

    return{
      ...state,
      currentUser:payload
    }
    default:
      throw new Error('type is not defined in userReducer')
  }

}

const INITIAL_STATE={
  currentUser:null
}


export const UserContextProvider = ({ children }) => {
 const [state,dispatch]=useReducer(userReducer,INITIAL_STATE)

 const {currentUser}= state

 const setCurrentUser=(user)=>{
  dispatch({type:setCurrentUserConstantType.SET_CURRENT_USER,payload:user})
 }

  const value = { currentUser};

  useEffect(()=>{
   const unSubscribe =onAuthStateChangedListener((user)=>{
 
    if(user){
      createUserDocumentfromAuth(user)
    }
    setCurrentUser(user)

    })

 return unSubscribe
  },[])

  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};

export const UseContext = () => {
  return useContext(userContext);
};
