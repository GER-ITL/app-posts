import React from "react";
import "./../../styles/App.scss";
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({ profilePage, dispatch }) => {

  const { postsData, profileData, newPostText } = profilePage;

  return (
    <div className="profile">
      {/* <img
        src="https://www.pixground.com/wp-content/uploads/2023/04/Clouds-Meet-The-Sea-AI-Generated-4K-Wallpaper-jpg.webp"
        alt=""
      /> */}
      <ProfileInfo profileData={profileData} />
      <Posts
        postsData={postsData}
        newPostText={newPostText}
        dispatch={dispatch}
      />
    </div>
  );
};

export default Profile;
