import React from "react";
import styles from "./Users.module.scss";
import User from "./User";
import axios from "axios";
const Users = ({ usersPage, followHandler, unfollowHandler, setUsersHandler }) => {
  const { users } = usersPage;
  let getUsers  = () => {
  if (users.length === 0){
   axios
     .get("https://social-network.samuraijs.com/api/1.0/users")
     .then(response => setUsersHandler(response.data.items));
 }
  }
  
  return (
    <div className={styles.usersPage}>
      <h1>USERS WILL BE HERE</h1>
      <button className={styles.showmoreBtn} onClick={getUsers}>Fetch users</button>
      <div className={styles.usersBlock}>
        {users.map((user) => {
          return (
            <User
              key={user.id}
              user={user}
              followHandler={followHandler}
              unfollowHandler={unfollowHandler}
            />
          );
        })}
      </div>
      <div className={styles.showmoreBtnBlock}>
       {users.length !== 0 ?<button className={styles.showmoreBtn}>Show More</button> : '' } 
      </div>
    </div>
  );
};

export default Users;
