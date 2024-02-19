import { useState, useContext } from "react";
import {nanoid} from "nanoid";
import { useNavigate, useOutletContext } from "react-router-dom";

import "./NewNotes.css"
import NotesList from './NotesList'
import NotesContext from "./Contexts/NotesContext";

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import DeleteIcon from '@mui/icons-material/Delete';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import CreateIcon from '@mui/icons-material/Create';
import LockIcon from '@mui/icons-material/Lock';




const NewNotes = () => {
    const [noteTitle, setNoteTitle] = useState('');
    const [noteText, setNoteText] = useState('');
    const { addNote, deleteNote, notes, searchText, setSearchText } = useOutletContext();
    const characterLimit = 500;
    const titleLimit = 35;
    const navigate = useNavigate();
    


    const handleChangeTitle = (event) => {
        if (titleLimit-event.target.value.length >=0) {
            setNoteTitle(event.target.value)
        }
        
    }

    const handleChangeText = (event) => {
        if (characterLimit-event.target.value.length >= 0) {
            setNoteText(event.target.value)
        }
    }

    const handleSaveClick = () => {
        console.log("Save button clicked");
        if (noteText.trim().length > 0) { // Check if noteText is not just empty spaces
            addNote(noteText, noteTitle);
            navigate(-1); // Optionally navigate back after saving
        }
    }

    return (
        <div className="added-note-container">
            <div className="new-note-header">
                <div className="header-left">
                    <ArrowBackIosIcon className="arrow-back" onClick={()=>navigate(-1)} />
                </div>
                <div className="header-right">
                    <LockIcon/>
                    <CreateIcon/>
                    <BookmarkBorderIcon/>
                    <DeleteIcon/>   
                </div>
            
            </div>
                <textarea 
                    style={{fontSize: 25}}
                    placeholder="Title..."
                    rows='1'
                    maxLength={titleLimit}
                    onChange={handleChangeTitle}
                />
                <div className="note-body">
                    <textarea 
                        style={{
                            backgroundColor: "#c4c2fd",
                            borderRadius: 16,
                            width: '95%',
                            paddingLeft: 15,
                            paddingRight: 15
                        }}
                        onChange={handleChangeText}
                        rows='25'
                        placeholder="Type to add a note..."
                        maxLength={characterLimit}
                    />
                </div>
                
            <div className="note-footer">
                <small>{characterLimit-noteText.length}</small>
                <button className="save" onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    )
}

export default NewNotes;