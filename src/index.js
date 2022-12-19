import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

import { CategoriesContextProvider } from "./components/context/categories.context";
import { CartContextProvider } from "./components/context/cart.context";
import { Provider } from "react-redux";
import { store } from "./store/store";
ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
     
        <CategoriesContextProvider>
          <CartContextProvider>
            <App />
          </CartContextProvider>
        </CategoriesContextProvider>
     
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
