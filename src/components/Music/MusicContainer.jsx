import {
  searchMusicCreator,
  updateNewMusicBodyCreator,
} from "../../redux/reducers/music-reducer";
import { connect } from "react-redux";
import Music from "./Music";
import { AuthRedirect } from "../../hoc/AuthRedirect";

let mapStateToProps = (state) => {
  return {
    musicPage: state.musicPage,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    onSearchClick: () => {
      dispatch(searchMusicCreator());
    },
    onUpdateSearch: (body) => {
      dispatch(updateNewMusicBodyCreator(body));
    },
  };
};

const MusicContainer = AuthRedirect( connect(mapStateToProps, mapDispatchToProps)(Music));

export default MusicContainer;
