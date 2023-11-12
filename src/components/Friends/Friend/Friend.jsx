import React from "react";
import classes from "./../Friend.module.scss";

const Friend = (props) => {
  return (
    <div className={classes.liItem}>
      <img src={props.img} alt="" />
      <li className={classes.listFriends}>{props.name}</li>
      <div>{props.info}</div>
    </div>
  );
};

export default Friend;
