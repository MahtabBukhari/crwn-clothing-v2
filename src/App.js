import { Routes, Route } from "react-router-dom";
import Checkout from "./routes/checkout/checkout.component";
import Authentication from "./routes/authentication/authentication.component";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Shop from "./routes/shop/shop.component";
import { useEffect } from "react";
import { createUserDocumentfromAuth, onAuthStateChangedListener } from "./utiles/firebase/firebase.utiles";
import { setCurrentUser } from "./store/user/user.action";
import { useDispatch } from "react-redux";

const App = () => {
const dispatch = useDispatch()
  useEffect(()=>{
    const unSubscribe =onAuthStateChangedListener((user)=>{
  
     if(user){
       createUserDocumentfromAuth(user)
     }
   dispatch(setCurrentUser(user))  
 
     })
 
  return unSubscribe
   },[])

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout"  element={<Checkout/>}/>
      </Route>
    </Routes>
  );
};

export default App;
