import React from "react";
import classes from "./../Friend.module.scss";

const Friend = ({img, name, status}) => {
  return (
    <div className={classes.liItem}>
      <img src={img} alt="AVA" />
      <li className={classes.listFriends}>
        {name} <span>{status === true ? 'online' : 'offline'}</span>
      </li>
    </div>
  );
};

export default Friend;
