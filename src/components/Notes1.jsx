import { useState, useEffect } from "react";
import styles from "./Notes1.module.css";
import { Link, useNavigate, Outlet, useLocation } from "react-router-dom";
import "./NewNotes.css"
import NotesList from './NotesList'
import { NavigateNextOutlined } from "@mui/icons-material";
import {nanoid} from "nanoid";
import NotesContext from "./Contexts/NotesContext";

const mockData = [
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
  },]


const colors = ["#C3D2EF", "#E9C3EF", "#C4EFC3", "#7CF4E5", "#b3b0fc"];
function getColor() {
  const i = Math.floor(Math.random() * colors.length);
  return colors[i];
}

const Notes1 = () => {
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState('');
  
  const addNote = (text,title, editing) => {
    const date = new Date();
    const newNote = {
      text:text,
      date: date.toLocaleDateString(),
      id: nanoid(),
      title: title,
      color: getColor()
    }
    const newNotes = [newNote, ...notes ];
    setNotes(newNotes)
  }

  
  const deleteNote = (id) => {
    const newNotes = notes.filter((note)=>note.id !== id)
    setNotes(newNotes);
  }

  const editNote =(id) => {
    const selectedNote = notes.filter((note)=>note.id === id);
    navigate("/Notes1/newnotes", { state: { selectedNote: selectedNote } })
  }
  
  const saveEditedNote = (text,title, id) => {
    const date = new Date()
    const newNote = {
      text:text,
      date: date.toLocaleDateString(),
      id: id,
      title: title,
      color: getColor()
    }
    const newNotes = notes.filter((note)=>note.id !== id)
    const editedNotes = [newNote, ...newNotes ];
    setNotes(editedNotes);

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
      <Outlet context={{ addNote, deleteNote, editNote, saveEditedNote, notes, searchText, setSearchText}}/>  
      <Link to="/">
        <button className={styles.HomeButton}> {"<"} Back to Menu</button>
      </Link>
      
    </>
  );
};

export default Notes1;
