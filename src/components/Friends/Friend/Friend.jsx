import React from "react";
import classes from "./../Friend.module.scss";

const Friend = (props) => {
  return (
    <div className={classes.liItem}>
      <img src={props.img} alt="AVA" />
      <li className={classes.listFriends}>
        {props.name} <span>{props.status}</span>
      </li>
    </div>
  );
};

export default Friend;
