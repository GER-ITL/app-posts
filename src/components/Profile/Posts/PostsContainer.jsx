import React from "react";
import {
  addPostActionCreator,
  removePostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/reducers/profile-reducer";
import Posts from "./Posts";

const PostsContainer = ({ store }) => {
  let state = store.getState();
  const addPostHandler = () => {
    store.dispatch(addPostActionCreator());
  };
  const removePostHandler = () => {
    store.dispatch(removePostActionCreator());
  };
  let onPostChangeHandler = (text) => {
    let action = updateNewPostTextActionCreator(text);
    store.dispatch(action);
  };
  return (
    <Posts
      postsData={state.profilePage.postsData}
      newPostElement={state.profilePage.newPostElement}
      newPostText={state.profilePage.newPostText}
      addPostHandler={addPostHandler}
      removePostHandler={removePostHandler}
      updateNewPostText={onPostChangeHandler}
    />
  );
};
export default PostsContainer;
