import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { store ,persistor} from "./store/store";
import { stripePromise } from "./utiles/firebase/stripe/stripe.utils";
import { PersistGate } from "redux-persist/integration/react";
import { Elements } from "@stripe/react-stripe-js";

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
  <PersistGate persistor={persistor}>
 
    <BrowserRouter>
     
      <Elements stripe={stripePromise}>
      
      <App />


      </Elements>
          
       
      
     
    </BrowserRouter>
    </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
