import { useState, useEffect } from "react";
import styles from "./Notes1.module.css";
import { Link, useNavigate, Outlet } from "react-router-dom";
import "./NewNotes.css"
import NotesList from './NotesList'
import { NavigateNextOutlined } from "@mui/icons-material";
import {nanoid} from "nanoid";
import NotesContext from "./Contexts/NotesContext";



const colors = ["#C3D2EF", "#E9C3EF", "#C4EFC3", "#7CF4E5", "#b3b0fc"];
function getColor() {
  const i = Math.floor(Math.random() * colors.length);
  return colors[i];
}

const Notes1 = () => {
  const [notes, setNotes] = useState([
      {
          text: "I love math 33A and 33B!",
          date: "02/17/2024",
          title: "Math",
          color: "#b3b0fc",
          id: nanoid()
      },
      {
          text: "Eggs\nButter\nRice\n",
          date: "02/17/2024",
          title: "Groceries",
          color: "#E9C3EF",
          id: nanoid()
      },
      {
          text: "Today, I am grateful for:\n\nCoffee \nFriends \nAlcohol",
          date: "02/17/2024",
          title: "Journal",
          color: "#C4EFC3",
          id: nanoid()
      },
      
  ]);
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState('');
  
  const addNote = (text,title) => {
    const date = new Date();
    const newNote = {
      text:text,
      date: date.toLocaleDateString(),
      id: nanoid(),
      title: title,
      color: getColor()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes)

  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note)=>note.id !== id)
    setNotes(newNotes);
  }

  useEffect(()=> {
    const savedNotes = JSON.parse(
      localStorage.getItem('react-notes-app-data')
    );
      
    if (savedNotes) {
      console.log(savedNotes)
      setNotes(savedNotes);
    }
  }, [])

  useEffect(()=> {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes)
    );
  }, [notes]);
  
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
      <Outlet context={{ addNote, deleteNote, notes, searchText, setSearchText}}/>  
      <Link to="/">
        <button className={styles.HomeButton}> {"<"} Back to Menu</button>
      </Link>
      
    </>
  );
};

export default Notes1;
