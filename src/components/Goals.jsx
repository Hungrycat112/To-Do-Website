import "@fontsource/kiwi-maru";
import { Link, useNavigate } from "react-router-dom";
import ProgressBar from "./ProgressBar";
import { hover } from "@testing-library/user-event/dist/hover";

function GoalCard() {
  return (
    <div className="card-wrapper">
      <div
        style={{
          minHeight: "80px",
          marginTop: "28px",
          marginBottom: "10px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          gap: "4px",
        }}
        className="card"
      >
        <div>First Goal</div>
        <p style={{ fontSize: "10px", margin: 0 }}>Progress Bar</p>
        <ProgressBar percent={30} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            textAlign: "center",
          }}
        >
          <div
            className="start-date"
            style={{
              flex: 1,
            }}
          >
            Start Date: <span id="start-date">...</span>
          </div>
          <div
            className="deadline-date"
            style={{
              flex: 1,
            }}
          >
            Deadline Date: <span id="deadline-date">...</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Goals() {
  const navigate = useNavigate();

  return (
    <>
      <h1>
        <div style={{ fontSize: "50px" }}>Goals!</div>
      </h1>
      <GoalCard />
      <GoalCard />
      <GoalCard />
      <GoalCard />
      <GoalCard />
      <br></br>
      <br></br>
      <div className="card-wrapper">
        <div
          style={{
            fontSize: "30px",
            padding: "4px",
            border: "1px solid white",
            background: "white",
            display: "flex",
            justifyContent: "center",
            color: "black",
            borderRadius: "10px",
            cursor: "pointer",
          }}
          onClick={() => navigate("/create-goal")}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "lightgray")} // Change background on hover
          onMouseLeave={(e) => (e.target.style.backgroundColor = "white")} // Restore original background
        >
          + New Goal
        </div>
      </div>
      <Link to={"/"}>
        <button class="styled-button">Home</button>
      </Link>
    </>
  );
}

export default Goals;
