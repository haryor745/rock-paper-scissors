import React from "react";
import logo from "../rock-paper-scissors-master/images/logo.svg";
function Header({ score }) {
  return (
    <>
      <div className="header">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="score-box">
          <p>SCORE</p>
          <h2>{score}</h2>
        </div>
      </div>
    </>
  );
}
export default Header;
