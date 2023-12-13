import React from "react";
import styles from "./Users.module.scss";
import User from "./User";
import axios from "axios";


class UsersClass extends React.Component {

  constructor({setUsers}){
    super({setUsers})
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then(response => this.props.setUsersHandler(response.data.items));
    
  }

    render(){
      return (
        <div className={styles.usersPage}>
          <h1>USERS WILL BE HERE</h1>
          {/* <button className={styles.showmoreBtn} onClick={this.getUsers}>Fetch users</button> */}
          <div className={styles.usersBlock}>
            {this.props.users.map((user) => {
              return (
                <User
                  key={user.id}
                  user={user}
                  followHandler={this.props.followHandler}
                  unfollowHandler={this.props.unfollowHandler}
                />
              );
            })}
          </div>
          <div className={styles.showmoreBtnBlock}>
           {this.props.users.length !== 0 ?<button className={styles.showmoreBtn}>Show More</button> : '' } 
          </div>
        </div>
      );
    }
}

export default UsersClass;
