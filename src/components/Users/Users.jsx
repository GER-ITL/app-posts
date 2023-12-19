import React from "react";
import styles from "./Users.module.scss";
import User from "./User";
const Users = ({
  usersPage,
  followHandler,
  unfollowHandler,
  currentPage,
  totalUsersCount,
  pageSize,
  onPageChanged,
}) => {
  const { users } = usersPage;

  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={styles.usersPage}>
      {/* <button className={styles.showmoreBtn} onClick={this.getUsers}>Fetch users</button> */}
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
      <div className={styles.spanPage}>
        {pages.map((page) => {
          return (
            <span 
              key={page}
              onClick={(e) => {
                onPageChanged(page);
              }}
              className={
                currentPage === page
                  ? styles.selectedPage
                  : styles.unSelectedPage
              }
            >
              {page}
            </span>
          );
        })}
      </div>
      <div className={styles.showmoreBtnBlock}>
        {users.length !== 0 ? (
          <button  className={styles.showmoreBtn}>Show More</button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Users;
