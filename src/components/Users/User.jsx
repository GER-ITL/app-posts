import React from "react";
import styles from "./Users.module.scss";
import userPhoto from '../../assets/img/user.jpg'
const User = ({ user, followHandler, unfollowHandler }) => {
  return (
    <div className={styles.userPageItem}>
      <div className={styles.userProfile}>
        <img className={styles.img} src={user.photos.small !== null ? user.photos.small : userPhoto} alt="" />
        {user.followed ? (
          <button
            onClick={() => {
              unfollowHandler(user.id);
            }}
            className={styles.btnUnfollow}
          >
            Unfollow
          </button>
        ) : (
          <button
            onClick={() => {
              followHandler(user.id);
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
