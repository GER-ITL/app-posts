import state, { subscribe } from "./redux/state";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { addPost, removePost, updateNewPostText } from "./redux/state";
const root = ReactDOM.createRoot(document.getElementById("root"));

let reranderEntireTree = (state) => {
  root.render(
    <BrowserRouter>
      <React.StrictMode>
        <App
          state={state}
          addPost={addPost}
          removePost={removePost}
          updateNewPostText={updateNewPostText}
        />
      </React.StrictMode>
    </BrowserRouter>
  );
};

reranderEntireTree(state);
subscribe(reranderEntireTree);
