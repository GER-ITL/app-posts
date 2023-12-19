import React from "react";
import "./../../../styles/App.scss";
import Preloader from '../../common/Preloader'
const ProfileInfo = ({ profile}) => {
  if (!profile){
    return <Preloader/>
  }
  return (
    <div className="profile_info">
      <div>
        <img src={profile.photos.large } alt="AVA" />
      </div>
      <div className="description">
        <h2>{profile.fullName}</h2>
        <div>About me: {profile.aboutMe}</div>
        <div>Job Status: {profile.lookingForAJobDescription}</div>
        <div>Contacts: </div>
        <div> {profile.contacts.github}</div>
        <div> {profile.contacts.vk}</div>
        <div> {profile.contacts.instagram}</div>
        <div> {profile.contacts.twitter}</div>
        <div> {profile.contacts.youtube}</div>

      </div>
    </div>
  );
};

export default ProfileInfo;
