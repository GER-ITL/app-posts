let store = {
  _state: {
    profilePage: {
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
    },
    messagesPage: {
      dialogsData: [
        {
          id: 1,
          name: "Alex",
        },
        {
          id: 2,
          name: "Jame",
        },
        {
          id: 3,
          name: "Vinsent",
        },
        {
          id: 4,
          name: "Jack",
        },
        {
          id: 5,
          name: "Johnny",
        },
      ],
      messagesData: [
        {
          id: 1,
          message: "mess 1",
        },
        {
          id: 2,
          message: "mess 2",
        },
        {
          id: 3,
          message: "mess 3",
        },
        {
          id: 4,
          message: "mess 4",
        },
        {
          id: 5,
          message: "mess 5",
        },
      ],
    },
    friendsPage: {
      friends: [
        {
          id: 1,
          name: "Alex L.",
          img: "https://i.pinimg.com/736x/2e/2e/21/2e2e2125ee53807c2d77b34773f84b5c.jpg",
          status: "online",
        },
        {
          id: 2,
          name: "Jack S.",
          img: "https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676296367166243426.png",
          status: "offline",
        },
        {
          id: 3,
          name: "Max J.",
          img: "https://i.pinimg.com/736x/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg",
          status: "offline",
        },
        {
          id: 4,
          name: "Margo N.",
          img: "https://sunmag.me/wp-content/uploads/2019/11/sunmag-001-small-avatar.png",
          status: "online",
        },
      ],
    },
    newsPage: {
      news: [
        { id: 1, label: "news 1" },
        { id: 2, label: "news 2" },
        { id: 3, label: "news 3" },
        { id: 4, label: "news 4" },
      ],
    },
  },
  getState() {
    return this._state;
  },
  _reranderEntireTree() {
    console.log("State change");
  },
  addPost() {
    let newPost = {
      id: 6,
      img: "https://img.freepik.com/premium-vector/anonymous-hooded-avatar-hidden-user-incognito-hacker-isolated-vector-illustration_619989-1263.jpg",
      mess: this._state.profilePage.newPostText,
      count: 0,
    };
    this._state.profilePage.postsData.push(newPost);
    this._state.profilePage.newPostText = "";
    this._reranderEntireTree(this._state);
  },

  updateNewPostText(messPost) {
    this._state.profilePage.newPostText = messPost;
    this._reranderEntireTree(this._state);
  },

  removePost() {
    this._state.profilePage.postsData.pop();
    this._reranderEntireTree(this._state);
  },
  subscribe(observer) {
    this._reranderEntireTree = observer;
  },
};

export default store;
