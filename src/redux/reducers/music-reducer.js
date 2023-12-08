const UPDATE_NEW_MUSIC_BODY = "UPDATE-NEW-MUSIC-BODY";
const SEARCH_MUCIS = "SEARCH-MUCIS";

let initialState = {
  musicData: [
    {
      id: 1,
      label: "Item 1",
      time: "02:22",
    },
    {
      id: 2,
      label: "Item 2",
      time: "01:50",
    },
    {
      id: 3,
      label: "Item 3",
      time: "01:20",
    },
  ],
  newIteMusicBody: "",
};

const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MUSIC_BODY:
      return { ...state, newIteMusicBody: action.body };
    case SEARCH_MUCIS: {
      let body = state.newIteMusicBody;
      return {
        ...state,
        musicData: [
          ...state.musicData,
          {
            id: 4,
            label: body,
            time: "01:47",
          },
        ],
        newIteMusicBody: "",
      };
    }
    default:
      return state;
  }
};

export const searchMusicCreator = () => ({ type: SEARCH_MUCIS });
export const updateNewMusicBodyCreator = (body) => ({
  type: UPDATE_NEW_MUSIC_BODY,
  body: body,
});

export default musicReducer;
