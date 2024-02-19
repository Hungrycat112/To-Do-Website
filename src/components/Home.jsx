import logo from "../images/logo.svg";
import checklist_logo from "../images/checklist.png";
import goals_logo from "../images/goals.svg";
import "react-calendar/dist/Calendar.css";
import "./Home.css";
import "@fontsource/kiwi-maru";
import Calendar from "react-calendar";
import { Link } from "react-router-dom";

function Home() {
  const formatShortWeekday = (locale, date) => {
    return date.toString().charAt(0);
  };
  const currentDate = new Date();
  return (
    <div className="App">
      <h4
        style={{
          textAlign: "center",
        }}
      >
        My Calendar
      </h4>
      <div className="heading-div" style={{}}>
        <div className="lefttext-div">
          <div
            style={{
              fontSize: "12px",
            }}
          >
            {currentDate.toLocaleDateString('en-US', {
              day: '2-digit',
              month: 'long',
              year: 'numeric',})}
          </div>
          <div
            style={{
              fontSize: "24px",
              width: "200px",
            }}
          >
            Hello, World!
          </div>
        </div>
        <div
          className="pfp-div"
          style={{ minHeight: "24px", backgroundColor: "white" }}
        >
          <img className="pfp" src={logo} />
        </div>
      </div>
      <div
        style={{
          marginTop: "8px",
          display: "flex",
          justifyContent: "center",
        }}
        className="card"
      >
        <Calendar formatShortWeekday={formatShortWeekday} />
      </div>
      <div className="card-wrapper">
        <div
          style={{
            minHeight: "80px",
            marginTop: "28px",
            marginBottom: "10px",
            display: "flex",
            alighItems: "center",
            gap: "4px",
          }}
          className="card"
        >
          <img src={checklist_logo} style={{ height: "26px" }} /> Tasks to Do
          Today
        </div>
      </div>

      <div className="card-wrapper">
        <div
          style={{
            minHeight: "80px",
            marginTop: "28px",
            marginBottom: "10px",
            display: "flex",
            alighItems: "center",
            gap: "4px",
          }}
          className="card"
        >
          <img src={goals_logo} style={{ height: "26px" }} /> Goals to Reach
        </div>
      </div>

      <Link to={"/goals"}>
        <button class="styled-button">Goals!</button>
      </Link>
      <Link to={"/Notes1/notes-grid"}>
        <button class="styled-button">Notes</button>
      </Link>
    </div>
  );
}

export default Home;
