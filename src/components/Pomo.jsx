import "./Pomo.css";
import headerImg from "../images/pomoDog42.png"
import { Link } from "react-router-dom";

const Pomedoro = () => {
  return (
    <>
        <div className="header header-container">
          <div>
            <div className="title">
              Pomodoro Timer
            </div>
            <div className="subtitle">
              Study effectively with this timer!
            </div>
          </div>
          <img src={headerImg} className="dog" />
        </div>
        <div className="content">
          <div className="timer-container">
            <div className="break-options">
              <button className="break-button">Short Break</button>
              <button className="break-button">Long Break</button>
            </div>
            <div className="timer-display">
              25:00
            </div>
            <div className="timer-controls">
              <button className="timer-button">Start</button>
              <button className="timer-button">Reset</button>
            </div>
          </div>
        </div>
        <div className="footer" style={{
          display: "flex",
          justifyContent: "center"
        }}>
          <Link to={"/"}>
            <button class="styled-button" style={{
              marginRight: 12
            }}>Home</button>
          </Link>
          <Link to={"/goals"}>
            <button class="styled-button style=" style={{
              marginRight: 12
            }}>Goals!</button>
          </Link>
          <Link to={"/Notes1/notes-grid"}>
            <button class="styled-button" style={{
              marginRight: 12
            }}>Notes</button>
          </Link>
        </div>
    </>
  );
}

export default Pomedoro;