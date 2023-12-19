import React from "react";
import styles from "./Users.module.scss";
import userPhoto from "../../assets/img/user.jpg";
import axios from "axios";
import { NavLink } from "react-router-dom";
const User = ({ user, followHandler, unfollowHandler }) => {
  return (
    <div className={styles.userPageItem}>
      <div className={styles.userProfile}>
        <NavLink to={"/profile/" + user.id}>
          <img
            className={styles.img}
            src={user.photos.small !== null ? user.photos.small : userPhoto}
            alt=""
          />
        </NavLink>
        {user.followed ? (
          <button
            onClick={() => {
              axios
                .delete(
                  `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                  {
                    withCredentials: true,
                    headers: {
                      "API-KEY": "02aa94db-c686-4d1b-a6f4-9225abebc990",
                    },
                  }
                )
                .then((response) => {
                  if (response.data.resultCode === 0) {
                    unfollowHandler(user.id);
                  }
                });
            }}
            className={styles.btnUnfollow}
          >
            Unfollow
          </button>
        ) : (
          <button
            onClick={() => {
              axios
                .post(
                  `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                  {},
                  {
                    withCredentials: true,
                    headers: {
                      "API-KEY": "02aa94db-c686-4d1b-a6f4-9225abebc990",
                    },
                  }
                )
                .then((response) => {
                  if (response.data.resultCode === 0) {
                    followHandler(user.id);
                  }
                });
            }}
            className={styles.btnFollow}
          >
            Follow
          </button>
        )}
      </div>
      <div className={styles.user}>
        <div className={styles.userInfo}>
          <div>{user.name}</div>
          <div>{user.status !== null ? user.status : "I'm new user"}</div>
        </div>
        <div className={styles.userInfo2}>
          <div className={styles.country}>{"user.location.country"},</div>
          <div>{"user.location.citi"}</div>
        </div>
      </div>
    </div>
  );
};

export default User;
