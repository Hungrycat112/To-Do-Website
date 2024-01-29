import styles from "./NewGoals.module.css";
import { Link, useNavigate } from "react-router-dom";
import homeworkImg from "../images/Homework.png";
import studyingImg from "../images/studying.png";
import samcantImg from "../images/samcant.png";
import H20Img from "../images/H20.png";
import $Img from "../images/$.png";
import samImg from "../images/sam.png";
import foodImg from "../images/food.png";
import AImg from "../images/A.png";
import readImg from "../images/read.png";
import danceImg from "../images/dance.png";
import dogImg from "../images/dog.png";
import notsamImg from "../images/notsam.png";


export default function NewGoals() {
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
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        Begin your journey by establishing personal goals to enhance yourself
        and motivate yourself to rise from bed!
      </div>
      <div className="card-wrapper">
        <br></br>
        <div
          style={{
            fontSize: "20px",
            textAlign: "left",
            padding: "10px 20px",
            width: "90%",
            margin: "15px auto 0",
            background: "white",
            display: "flex",
            color: "black",
            borderRadius: "10px",
            cursor: "pointer",
          }}
          onClick={() => navigate("/new-goal")}
        >
          Create Custom Goal
        </div>
      </div>
     <br></br>
      <div
        style={{
          margin: "20px,10px",
          textAlign: "center",
        }}
      >
        Or use a template
      </div>
      <br></br>
      <br></br>
      <div className={styles.TopicGrid}>
        <div className={styles.TopicButton}>
          <div className={styles.TopicImg}>
            <img src={homeworkImg} />
          </div>
          <div className={styles.TopicText}>Homework</div>
        </div>
        <div className={styles.TopicButton}>
          <div className={styles.TopicImg}>
            <img src={studyingImg} />
          </div>
          <div className={styles.TopicText}>Studying</div>
        </div>
        <div className={styles.TopicButton}>
          <div className={styles.TopicImg}>
            <img src={samcantImg} />
          </div>
          <div className={styles.TopicText}>Excercise</div>
        </div>
        <div className={styles.TopicButton}>
          <div className={styles.TopicImg}>
            <img src={H20Img} />
          </div>
          <div className={styles.TopicText}>Drinking Water</div>
        </div>
        <div className={styles.TopicButton}>
          <div className={styles.TopicImg}>
            <img src={$Img} />
          </div>
          <div className={styles.TopicText}>Budget</div>
        </div>
        <div className={styles.TopicButton}>
          <div className={styles.TopicImg}>
            <img src={samImg} />
          </div>
          <div className={styles.TopicText}>Sleeping</div>
        </div>
        <div className={styles.TopicButton}>
          <div className={styles.TopicImg}>
            <img src={foodImg} />
          </div>
          <div className={styles.TopicText}>Eating Healthy</div>
        </div>
        <div className={styles.TopicButton}>
          <div className={styles.TopicImg}>
            <img src={AImg} />
          </div>
          <div className={styles.TopicText}>Passing a Test</div>
        </div>
        <div className={styles.TopicButton}>
          <div className={styles.TopicImg}>
            <img src={readImg} />
          </div>
          <div className={styles.TopicText}>Reading</div>
        </div>
        <div className={styles.TopicButton}>
          <div className={styles.TopicImg}>
            <img src={danceImg} />
          </div>
          <div className={styles.TopicText}>Dancing</div>
        </div>
        <div className={styles.TopicButton}>
          <div className={styles.TopicImg}>
            <img src={dogImg} />
          </div>
          <div className={styles.TopicText}>Walking a Dog</div>
        </div>
        <div className={styles.TopicButton}>
          <div className={styles.TopicImg}>
            <img src={notsamImg} />
          </div>
          <div className={styles.TopicText}>Waking up Early</div>
        </div>
      </div>
      <br></br>
      <Link to={"/goals"}>
        <button class="styled-button">Back</button>
      </Link>
      <Link to={"/"}>
        <button class="styled-button">Home</button>
      </Link>
    </>
  );
}
