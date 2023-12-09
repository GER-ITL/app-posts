import React from "react";
import styles from "./Users.module.scss";
import User from "./User";
const Users = ({ usersPage, followHandler, unfollowHandler, setUsersHandler }) => {
  const { users } = usersPage;
  if (users.length === 0){
    setUsersHandler([
      {
          id: 1,
          fullname:'Dante R.',
          followed: true,
          img: "https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676296367166243426.png",
          status: 'Im a boss',
          location:{
              citi:'Moscow',
              country: 'Russia'
          }
      },
      {
          id: 2,
          fullname:'Alex N.',
          followed: false,
          img: "https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676296367166243426.png",
          status: 'Im a boss',
          location:{
              citi:'Dybna',
              country: 'Russia'
          }
      },
      {
          id: 3,
          fullname:'Dmitriy S.',
          followed: true,
          img: "https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676296367166243426.png",
          status: 'Im a boss',
          location:{
              citi:'Ximki',
              country: 'Russia'
          }
      },
      {
          id: 4,
          fullname:'Kate',
          followed: false,
          img: "https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676296367166243426.png",
          status: 'Im a boss',
          location:{
              citi:'Tverb',
              country: 'Russia'
          }
      },
  ])
  }
  
  return (
    <div className={styles.usersPage}>
      <h1>USERS WILL BE HERE</h1>
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
        <button className={styles.showmoreBtn}>Show More</button>
      </div>
    </div>
  );
};

export default Users;
