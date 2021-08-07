import React from "react";
import "./style.css";
import imagge from "../../../photo.jpg";

const ProfilePhoto = () => (
  <h1>
    <img src={imagge} className="photo" />
  </h1>
);

export default ProfilePhoto;
