const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const REMOVE_POST = "REMOVE-POST";

let initialState  = {
  postsData: [
    {
      id: 1,
      img: "https://img.freepik.com/premium-vector/anonymous-hooded-avatar-hidden-user-incognito-hacker-isolated-vector-illustration_619989-1263.jpg",
      mess: "Hello bro",
      count: 10,
    },
    {
      id: 2,
      img: "https://img.freepik.com/premium-vector/anonymous-hooded-avatar-hidden-user-incognito-hacker-isolated-vector-illustration_619989-1263.jpg",
      mess: "How are you?",
      count: 20,
    },
  ],
  profileData: [
    {
      name: "Dante R.",
      dataBirth: "8 january",
      citi: "Moscow",
      education: "BSU'11",
      img: "https://img.freepik.com/premium-vector/anonymous-hooded-avatar-hidden-user-incognito-hacker-isolated-vector-illustration_619989-1263.jpg",
    },
  ],
  newPostText: "",
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 6,
        img: "https://img.freepik.com/premium-vector/anonymous-hooded-avatar-hidden-user-incognito-hacker-isolated-vector-illustration_619989-1263.jpg",
        mess: state.newPostText,
        count: 0,
      };
      state.postsData.push(newPost);
      state.newPostText = "";
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.messPost;
      return state;
    case REMOVE_POST:
      state.postsData.pop();
      return state;
    default:
      return state;
  }
};


export const addPostActionCreator =()=>{
    return{
      type: ADD_POST
    }
  }
  export const updateNewPostTextActionCreator =(text)=>{
    return{
      type:UPDATE_NEW_POST_TEXT,
      messPost:text
    }
  }
  export const removePostActionCreator =()=>{
    return{
      type: REMOVE_POST
    }
  }

export default profileReducer;
