import React from "react";
import "./styles.css";

export default function Main() {
  return (
    <div>
      <h1 className="main-h1">Welcome Username</h1>
      <div className="buttons">
        <button
          className="main-button"
          onClick={() => (document.location.href = "/restaurant")}
        >
          Restaurant Overview
        </button>
        <button className="main-button">Active Orders</button>
        <button className="main-button">Managers View</button>
        <button className="main-button">Options</button>
        <button className="main-button">Log Out</button>
      </div>
    </div>
  );
}
