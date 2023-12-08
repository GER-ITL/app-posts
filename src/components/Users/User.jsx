import React from "react";
import styles from "./Users.module.scss";
const User = ({ user }) => {
  return (
    <div className={styles.user}>
      {user.fullname} {user.status} {user.location.country} {user.location.citi}
    </div>
  );
};

export default User;
