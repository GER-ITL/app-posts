const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
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
      img: "https://img.freepik.com/premium-vector/anonymous-hooded-avatar-hidden-user-incognito-hacker-isolated-vector-illustration_619989-1263.jpg",
      name: "Dante",
      message: "mess 1",
    },
    {
      id: 2,
      img: "https://img.freepik.com/premium-vector/anonymous-hooded-avatar-hidden-user-incognito-hacker-isolated-vector-illustration_619989-1263.jpg",
      name: "Dante",
      message: "mess 2",
    },
    {
      id: 3,
      img: "https://img.freepik.com/premium-vector/anonymous-hooded-avatar-hidden-user-incognito-hacker-isolated-vector-illustration_619989-1263.jpg",
      name: "Dante",
      message: "mess 3",
    },
    {
      id: 4,
      img: "https://img.freepik.com/premium-vector/anonymous-hooded-avatar-hidden-user-incognito-hacker-isolated-vector-illustration_619989-1263.jpg",
      name: "Dante",
      message: "mess 4",
    },
    {
      id: 5,
      img: "https://img.freepik.com/premium-vector/anonymous-hooded-avatar-hidden-user-incognito-hacker-isolated-vector-illustration_619989-1263.jpg",
      name: "Dante",
      message: "mess 5",
    },
  ],
 
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let body = action.newMessageBody;
      return {
        ...state,
        messagesData: [
          ...state.messagesData,
          {
            id: 6,
            img: "https://img.freepik.com/premium-vector/anonymous-hooded-avatar-hidden-user-incognito-hacker-isolated-vector-illustration_619989-1263.jpg",
            name: "Dante",
            message: body,
          },
        ],
      };
    }
    default:
      return state;
  }
};

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody});


export default messagesReducer;
