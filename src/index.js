import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { CartContextProvider } from "./components/context/cart.context";
import { Provider } from "react-redux";
import { store } from "./store/store";
ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
     
      
          <CartContextProvider>
            <App />
          </CartContextProvider>
      
     
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
