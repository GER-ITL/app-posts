import React from "react";
import Friend from "./Friend/Friend";
import classes from './Friend.module.scss'
const Friends = ({friendsPage}) => {
  return (
    <div>
      <h1>Friends</h1>
      <ul className={classes.ulItem}>
      {friendsPage.friends.map(({ id, name, img, status}) => {
        return <Friend key={id} name={name} img={img} status ={status}/>;
      })}
      </ul>
    </div>
  );
};

export default Friends;
