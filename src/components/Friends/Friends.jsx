import React from "react";
import Friend from "./Friend/Friend";
import classes from './Friend.module.scss'
const Friends = (props) => {
  return (
    <div>
      <h1>Friends</h1>
      <ul className={classes.ulItem}>
      {props.state.friends.map((friend) => {
        return <Friend key={friend.id} name={friend.name} img={friend.img} info ={friend.info}/>;
      })}
      </ul>
    </div>
  );
};

export default Friends;
