import { profileThunk } from "../../redux/reducers/profile-reducer";
import React from "react";
import "./../../styles/App.scss";
import Profile from "./Profile";
import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { AuthRedirect } from "../../hoc/AuthRedirect";
class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.profileThunk(userId);
  }

  render() {
    return (
      <div className="profileContainer">
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    );
  }
}
let AuthRedirectComponent = AuthRedirect(ProfileContainer)

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  profilePage: state.profilePage,
});

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }
  return ComponentWithRouterProp;
}

export default connect(mapStateToProps, { profileThunk })(
  withRouter(AuthRedirectComponent)
);
