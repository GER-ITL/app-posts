import store from "./redux/redux-store";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import StoreContext from "./StoreContext";
const root = ReactDOM.createRoot(document.getElementById("root"));

let reranderEntireTree = () => {
  root.render(
    <BrowserRouter>
    <StoreContext.Provider value={store}>
      <React.StrictMode>
        <App
          state={store.getState()}
          dispatch={store.dispatch.bind(store)}
          store = {store}
        />
      </React.StrictMode>
    </StoreContext.Provider>
    </BrowserRouter>
  );
};

reranderEntireTree(store.getState());
store.subscribe(reranderEntireTree);
