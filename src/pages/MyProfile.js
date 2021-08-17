import React from "react";
import Profile from "../components/User/Profile/Profile";

function MyProfile() {
  document.title = "My Profile";
  return (
    <div>
      <Profile></Profile>
    </div>
  );
}

export default MyProfile;
