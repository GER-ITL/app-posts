import React from "react";
import "./../../styles/App.scss";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";

const Profile = ({ store }) => {
  const {profilePage} = store.getState()
  const {  profileData } = profilePage;

  return (
    <div className="profile">
      {/* <img
        src="https://www.pixground.com/wp-content/uploads/2023/04/Clouds-Meet-The-Sea-AI-Generated-4K-Wallpaper-jpg.webp"
        alt=""
      /> */}
      <ProfileInfo profileData={profileData} />
      <PostsContainer store = {store}/>
    </div>
  );
};

export default Profile;
