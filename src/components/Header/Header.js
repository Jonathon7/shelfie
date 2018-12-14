import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header-cont">
      <h1>SHELFIE</h1>
      <div className="header-buttons">
        <Link to="/about">
          <h2>About</h2>{" "}
        </Link>
      </div>
    </div>
  );
}
