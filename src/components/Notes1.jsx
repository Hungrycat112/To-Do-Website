import { useState } from "react";
import styles from "./Notes1.module.css";
import { Link, useNavigate } from "react-router-dom";

const mockData = [
  {
    title: "Foo",
    text: "Lorem Ipsum dolor sit amet",
    color: "#C3D2EF",
  },
  {
    title: "Foo",
    text: "Lorem Ipsum dolor sit amet",
    color: "#C4EFC3",
  },
  {
    title: "Foo",
    text: "Lorem Ipsum dolor sit amet",
    color: "#E9C3EF",
  },
  {
    title: "Foo",
    text: "Lorem Ipsum dolor sit amet",
    color: "#C3D2EF",
  },
  {
    title: "Foo",
    text: "Lorem Ipsum dolor sit amet",
    color: "#7CF4E5",
  },
  {
    title: "Foo",
    text: "Lorem Ipsum dolor sit amet",
    color: "#E9C3EF",
  },
];

const colors = ["#C3D2EF", "#E9C3EF", "#C4EFC3", "#7CF4E5"];
function getColor() {
  const i = Math.floor(Math.random() * colors.length);
  return colors[i];
}

const Notes1 = () => {
  const [notes, setNotes] = useState(mockData);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "50px",
        }}
      >
        {" "}
        Notes
      </div>
      <div className={styles.NotesContainer}>
        {notes.map((note, i) => (
          <div
            key={i}
            className={styles.Box}
            style={{
              backgroundColor: note.color,
            }}
          >
            {note.title}
            <br />
            {note.text}
          </div>
        ))}
      </div>
      <Link to="./newnotes">
      <button className={styles.New}>➕ Add Note</button>
      </Link>
      <Link to="/">
        <button className={styles.HomeButton}> {"<"} Back to Menu</button>
      </Link>
    </>
  );
};

export default Notes1;
