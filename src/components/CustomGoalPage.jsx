import { Link, useNavigate } from "react-router-dom";
import styles from "./CustomGoalPage.module.css";

export default function CustomGoalPage() {
  const navigate = useNavigate();

  return (
    <>
      <div
        style={{
          marginTop: "20px",
          fontSize: "30px",
          padding: "4px",
          textAlign: "center",
        }}
      >
        My Goals
      </div>
      <div style={{ fontSize: "20px", padding: "4px", textAlign: "center" }}>
        Today
      </div>
      <div className={"card " + styles.DaySelectWrapper}>
        <button>S</button>
        <button>M</button>
        <button>T</button>
        <button>W</button>
        <button>T</button>
        <button>F</button>
        <button>S</button>
      </div>
      <form className={styles.GoalForm}>
        <div>
          Name: <input className={styles.GoalInput} />
        </div>
        <div>
          Goal: <input className={styles.GoalInput} />
        </div>
        <div>
          Time Period: <input className={styles.GoalInput} />
        </div>
        <div>
          Start Date: <input className={styles.GoalInput} />
        </div>
        <div>
          When to Log: <input className={styles.GoalInput} />
        </div>
        <div>
          Reminders: <input className={styles.GoalInput} />
        </div>
      </form>
      <div className={styles.BottomButtons}>
        <button
          onClick={() => navigate("/create-goal")}
          className={styles.OtherButton}
        >
          {"<"} Back
        </button>
        <button onClick={() => navigate("/")} className={styles.FinishButton}>
          Finish
        </button>
        <button onClick={() => navigate("/")} className={styles.OtherButton}>
          Rewards
        </button>
      </div>
    </>
  );
}
