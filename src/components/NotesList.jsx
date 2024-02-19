import "./Note.css";
import "./Notes1.module.css"
import Note from './Note';
import { Link, useNavigate } from "react-router-dom";

const NotesList = ({notes, handleDeleteNote, handleAddNote}) => {
    const navigate = useNavigate();

    return (
        <div className="notes-list">
            {notes.map((note)=> (
                <Note 
                    id={note.id} 
                    text={note.text} 
                    title={note.title}
                    date={note.date}
                    color={note.color}
                    handleDeleteNote={handleDeleteNote}
                />
            ))}
            <button className="add-note" 
            onClick={()=>navigate('/Notes1/newnotes')}>
                ➕ Add Note
            </button>
        </div>
    )
}

export default NotesList;