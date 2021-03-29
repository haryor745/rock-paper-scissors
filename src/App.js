import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Play from "./components/Play";
import Game from "./components/Game";
import Modal from "./components/Modal";
import { Switch, Route } from "react-router-dom";
import "./styles.css";
function App() {
  const [userPick, setUserPick] = useState("");
  const [score, setScore] = useState(setStorage());
  const [open, setOpen] = useState(false);
  function setStorage() {
    let savedScore = localStorage.getItem("score");
    if (savedScore) {
      return JSON.parse(localStorage.getItem("score"));
    } else {
      return 0;
    }
  }
  useEffect(() => {
    localStorage.setItem("score", JSON.stringify(score));
  }, [score]);
  return (
    <>
      {open && <Modal setOpen={setOpen} />}
      <div className="container">
        <Header score={score} />
        <Switch>
          <Route exact path="/">
            <Play setUserPick={setUserPick} />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/game">
            <Game score={score} setScore={setScore} userPick={userPick} />
          </Route>
        </Switch>
        <Footer open={open} setOpen={setOpen} />
      </div>
    </>
  );
}
export default App;
