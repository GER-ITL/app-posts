import React from "react";
import "./../../styles/App.scss";
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className="profile">
      {/* <img
        src="https://www.pixground.com/wp-content/uploads/2023/04/Clouds-Meet-The-Sea-AI-Generated-4K-Wallpaper-jpg.webp"
        alt=""
      /> */}
      <ProfileInfo profileData={props.state.profileData} />
      <Posts postsData={props.state.postsData} addPost = {props.addPost} removePost= {props.removePost}/>
    </div>
  );
};

export default Profile;
