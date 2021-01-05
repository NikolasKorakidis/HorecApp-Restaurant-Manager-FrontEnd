import React from "react";
import "./style.css";
import Image from "./pictures/HorecAppBanner.png";

export default function index() {
  return (
    <div className="main-intro-div">
      <h1 className="intro-header">Welcome to Horecapp</h1>
      <div className="cssload-thecube">
        <div className="cssload-cube cssload-c1"></div>
        <div className="cssload-cube cssload-c2"></div>
        <div className="cssload-cube cssload-c4"></div>
        <div className="cssload-cube cssload-c3"></div>
      </div>
      <p>Loading...</p>
      <img src={Image} alt="A horecapp banner" className="intro-image" />
    </div>
  );
}
