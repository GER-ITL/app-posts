import {
  addPostActionCreator,
  removePostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/reducers/profile-reducer";
import Posts from "./Posts";
import { connect } from "react-redux";



let mapStateToProps = (state)=>{
  return{
    postsData: state.profilePage.postsData,
    newPostElement: state.profilePage.newPostElement,
    newPostText: state.profilePage.newPostText,
  }
}
let mapDispatchToProps = (dispatch)=>{
  return{
    addPostHandler: () => {
      dispatch(addPostActionCreator());
    },
    removePostHandler: () => {
      dispatch(removePostActionCreator());
    },
    updateNewPostText: (text) => {
      let action = updateNewPostTextActionCreator(text);
      dispatch(action);
    },
  }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer;
