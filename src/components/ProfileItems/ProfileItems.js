import React from "react";
import { Link } from "react-router-dom";
import "./ProfileItems.css";

export default function ProfileItems({ id,title, text, label }) {
  return (
    <Link to={`/analysis/${id}`}>
      <div className="profile-items">
        <p>{title}</p>
        <p>{text}</p>
        <p>{label}</p>
      </div>
    </Link>
  );
}
