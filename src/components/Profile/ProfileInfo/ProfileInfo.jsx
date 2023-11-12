import React from "react";
import "./../../../styles/App.scss";
const ProfileInfo = (props) => {
  return (
    <div className="profile_info">
      <div>
        <img src={props.profileData[0].img} alt="AVA" />
      </div>
      <div className="description">
        <h2>{props.profileData[0].name}</h2>
        <div>Data of Birth: {props.profileData[0].dataBirth}</div>
        <div>Citi: {props.profileData[0].citi}</div>
        <div>Education: {props.profileData[0].education}</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
