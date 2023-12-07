import React from "react";
import "./../../../styles/App.scss";
const ProfileInfo = ({profileData}) => {
  return (
    <div className="profile_info">
      <div>
        <img src={profileData[0].img} alt="AVA" />
      </div>
      <div className="description">
        <h2>{profileData[0].name}</h2>
        <div>Data of Birth: {profileData[0].dataBirth}</div>
        <div>Citi: {profileData[0].citi}</div>
        <div>Education: {profileData[0].education}</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
