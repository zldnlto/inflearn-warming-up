import React from "react";

function Notification({ isVisible, color, message }) {
  return (
    <div
      className={`notice-${color} ${isVisible ? "visible" : "hidden"}`}
      role="alert"
    >
      <span className="font-medium">{message}</span>
    </div>
  );
}

export default Notification;
