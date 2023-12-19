import { connect } from "react-redux";
import {
  follow,
  setCurrentPages,
  setTotalUsersCount,
  setUsers,
  unfollow,
  setToogleIsFetching,
} from "../../redux/reducers/users-reducer";
import React from "react";
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader";

class UsersClassAPI extends React.Component {
  componentDidMount() {
    this.props.setToogleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}` ,
        {withCredentials:true}
      )
      .then((response) => {
        this.props.setToogleIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPages(pageNumber);
    this.props.setToogleIsFetching(true);

    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
        {withCredentials:true}
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setToogleIsFetching(false);
      });
  };

  render() {
    return (
      <>
        <h1>USERS WILL BE HERE</h1>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Users
            usersPage={this.props.usersPage}
            followHandler={this.props.follow}
            unfollowHandler={this.props.unfollow}
            currentPage={this.props.currentPage}
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            onPageChanged={this.onPageChanged}
          />
        )}
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    usersPage: state.usersPage,
    isFetching: state.usersPage.isFetching,
  };
};
// let mapDispatchToProps = (dispatch) => {
//   return {
//     followHandler: (userId) => {
//       dispatch(followAC(userId));
//     },
//     unfollowHandler: (userId) => {
//       dispatch(unfollowAC(userId));
//     },
//     setUsersHandler: (users) => {
//       dispatch(setUsersAC(users));
//     },
//     setCurrentPage: (pageNumber) => {
//       dispatch(setCurrentPagesAC(pageNumber));
//     },
//     setTotalUsersCount: (totalCount) => {
//       dispatch(setUsersTotalCountAC(totalCount));
//     },
//     setToogleIsFetching: (isFetching) => {
//       dispatch(setToogleIsFetchingAC(isFetching));
//     },
//   };
// };

const UsersContainer = connect(
  mapStateToProps,
 {follow, unfollow, setUsers, setCurrentPages, setTotalUsersCount, setToogleIsFetching,}
)(UsersClassAPI);

export default UsersContainer;
