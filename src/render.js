import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { addPost, removePost } from "./redux/state";
const root = ReactDOM.createRoot(document.getElementById("root"));

export let reranderEntireTree = (state)=>{
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App state={state} addPost = {addPost} removePost = {removePost}/>
    </React.StrictMode>
  </BrowserRouter>
);
}
