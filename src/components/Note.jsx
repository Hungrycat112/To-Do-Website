import DeleteIcon from '@mui/icons-material/Delete';
import "./Note.css";
import { TextField } from "@mui/material";
import CreateIcon from '@mui/icons-material/Create';

const Note = ({id, text, title, date, color, handleDeleteNote}) => {
    return (
        <div className="note" style={{backgroundColor: color }}>
            <div className='upper-note'>
                <span>{title}</span>
                <span style={{padding: 5, fontSize: 11}}>{text}</span>
            </div>
            <div className='note-footer'>
                <small className='date'>{date}</small>

            <div>
                <CreateIcon/>
                <DeleteIcon className='delete-icon' onClick={()=>handleDeleteNote(id)}/>
            </div>
                
            </div>
        </div>
    )
};

export default Note;