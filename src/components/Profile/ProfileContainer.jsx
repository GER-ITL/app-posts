import { profileThunk, getStatus, updateStatus } from "../../redux/reducers/profile-reducer";
import React from "react";
import "./../../styles/App.scss";
import Profile from "./Profile";
import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { AuthRedirect } from "../../hoc/AuthRedirect";
import { compose } from "redux";
class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = 30514;
    }
    this.props.profileThunk(userId);
    this.props.getStatus(userId)
  }

  render() {
    return (
      <div className="profileContainer">
        <Profile {...this.props} profile={this.props.profile} status = {this.props.status} updateStatus = {this.props.updateStatus} />
      </div>
    );
  }
}




// let AuthRedirectComponent = AuthRedirect(ProfileContainer)

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  profilePage: state.profilePage,
  status: state.profilePage.status
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

export default compose(
  connect(mapStateToProps, { profileThunk, getStatus, updateStatus }),
  withRouter,
  AuthRedirect
)(ProfileContainer)