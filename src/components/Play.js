import React from "react";
import { Link } from "react-router-dom";
import tri from "../rock-paper-scissors-master/images/bg-triangle.svg";
const picks = ["rock", "paper", "scissors"];
const triangle = (
  <svg xmlns="http://www.w3.org/2000/svg" width="305" height="277">
    <path
      fill="none"
      stroke="#000"
      stroke-width="15"
      d="M291.5 7.5H4.574c3.119 0 52.416 84.667 147.892 254L291.5 7.5z"
      opacity=".2"
    />
  </svg>
);
function Play({ setUserPick }) {
  return (
    <>
      <div className="play">
        {/* {triangle} */}
        <img src={tri} alt="tri" />
        {picks.map((item, index) => {
          return (
            <Link
              to="/game"
              className={`picker picker-${item}`}
              key={index}
              onClick={() => {
                setUserPick(item);
              }}
            >
              <div className={`p-child child-${item}`}></div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
export default Play;
