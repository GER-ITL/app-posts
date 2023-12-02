const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState =  {
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
      name: 'Dante',
      message: "mess 1",
    },
    {
      id: 2,
      name: 'Dante',
      message: "mess 2",
    },
    {
      id: 3,
      name: 'Dante',
      message: "mess 3",
    },
    {
      id: 4,
      name: 'Dante',
      message: "mess 4",
    },
    {
      id: 5,
      name: 'Dante',
      message: "mess 5",
    },
  ],
  newMessageBody: ''
}

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = "";
      state.messagesData.push({ id: 6, name: "Dante", message: body });
      return state;
    default:
      return state;
  }
};


export const sendMessageCreator =()=> ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator =(body)=>
   ({type:UPDATE_NEW_MESSAGE_BODY, body:body}) 

export default messagesReducer;
