import styles from "./Posts.module.scss";
import Post from "./Post/Post";
import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, requiredField } from "../../../utils/validators";
import Textarea from "../../common/FormControls";
const maxLength300 = maxLengthCreator(300)
const Posts = ({
  postsData,
  addPostHandler,
  // removePostHandler,
}) => {

  // const removePost = () => {
  //   removePostHandler();
  // };

  const addNewPost = (values) => {
    addPostHandler(values.newPostBody)
  }
  return (
    <div>
      <h1> My Posts</h1>
      <AddPostFormRedux onSubmit={addNewPost}/>
      <div className={styles.posts}>
        {postsData.map((post) => {
          return (
            <Post
              key={post.id}
              img={post.img}
              mess={post.mess}
              count={post.count}
            />
          );
        })}
      </div>
    </div>
  );
};

const AddPostForm = (props) => {
  return(
    <form onSubmit={props.handleSubmit}>
    <div className={styles.addFormBlock}>
      <Field
        name="newPostBody"
        component={Textarea}
        validate={[requiredField, maxLength300]}
        placeholder="your news..."
      />
      <div>
        <button className={styles.sendBtn}>
          Send
        </button>
        <button className={styles.removeBtn}>
          Remove
        </button>
      </div>
    </div>
    </form>
  )
}

const AddPostFormRedux = reduxForm({form: 'profileNewPostBody'})(AddPostForm)
export default Posts;
