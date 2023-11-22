import store from "./redux/state";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));

let reranderEntireTree = () => {
  root.render(
    <BrowserRouter>
      <React.StrictMode>
        <App
          state={store.getState()}
          addPost={store.addPost.bind(store)}
          removePost={store.removePost.bind(store)}
          updateNewPostText={store.updateNewPostText.bind(store)}
        />
      </React.StrictMode>
    </BrowserRouter>
  );
};

reranderEntireTree(store.getState());
store.subscribe(reranderEntireTree);
