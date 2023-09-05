import React from "react";
import "./LoadingPage.css";

function LoadingPage(props) {
  return (
    <div className="container">
      <div className="newtons-cradle">
        <div className="newtons-cradle__dot"></div>
        <div className="newtons-cradle__dot"></div>
        <div className="newtons-cradle__dot"></div>
        <div className="newtons-cradle__dot"></div>
      </div>
    </div>
  );
}

export default LoadingPage;
