import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
function Game({ score, setScore, userPick }) {
  const picks = ["rock", "paper", "scissors"];
  const [userWin, setUserWin] = useState("");
  const [house, setHouse] = useState("");
  const [counter, setCounter] = useState(3);
  const houseSelect = () => {
    setHouse(picks[Math.floor(Math.random() * 3)]);
  };
  useEffect(() => {
    houseSelect();
  }, []);
  const result = () => {
    if (userPick === "rock" && house === "scissors") {
      setUserWin("win");
      setScore(score + 1);
    } else if (userPick === "rock" && house === "paper") {
      setUserWin("lose");
      setScore(score - 1);
    } else if (userPick === "scissors" && house === "paper") {
      setUserWin("win");
      setScore(score + 1);
    } else if (userPick === "scissors" && house === "rock") {
      setUserWin("lose");
      setScore(score - 1);
    } else if (userPick === "paper" && house === "rock") {
      setUserWin("win");
      setScore(score + 1);
    } else if (userPick === "paper" && house === "scissors") {
      setUserWin("lose");
      setScore(score - 1);
    } else {
      setUserWin("draw");
    }
  };
  useEffect(() => {
    const timer =
      counter > 0
        ? setInterval(() => {
            setCounter(counter - 1);
          }, 1000)
        : result();
    return () => {
      clearInterval(timer);
    };
  }, [counter, house]);
  return (
    <>
      <div className="game">
        <div className="user-result">
          <h3>You picked</h3>
          <div
            className={`picker picker-${userPick} ${
              userWin === "win" && "winner"
            }`}
          >
            <div className="p-child"></div>
          </div>
        </div>
        {counter === 0 && (
          <div className="result">
            <h2>
              {userWin === "win" && "you win"}
              {userWin === "lose" && "you lose"}
              {userWin === "draw" && "draw"}
            </h2>
            <div className="replay">
              <Link to="/" onClick={() => setHouse("")}>
                Play Again
              </Link>
            </div>
          </div>
        )}
        <div className="house-result">
          <h3>Bot picked</h3>
          {counter === 0 && (
            <div
              className={`picker picker-${house} ${
                userWin === "lose" && `winner`
              }`}
            >
              <div className="p-child"></div>
            </div>
          )}
          {counter > 0 && <div className="picker black">{counter}</div>}
        </div>
      </div>
    </>
  );
}
export default Game;
