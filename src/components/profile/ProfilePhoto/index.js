import React from "react";
import "./style.css";
import imagge from "../../../photo.jpg";

const ProfilePhoto = (props) => (
  <h1>
    <img onClick={props.adam} src={imagge} className="photo" alt="" />
  </h1>
);

export default ProfilePhoto;
