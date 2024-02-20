import DeleteIcon from '@mui/icons-material/Delete';
import "./Note.css";
import { TextField } from "@mui/material";
import CreateIcon from '@mui/icons-material/Create';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {useState} from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 350,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: 8,
    border: 0,
  };
  

const Note = ({id, text, title, date, color, handleDeleteNote, handleEditNote}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const deleteConfirm = () => {
        handleClose();
        handleDeleteNote(id);
    }

    return (
        <div className="note" style={{backgroundColor: color }}>
            <div className='upper-note'>
                <span>{title}</span>
                <span style={{padding: 5, fontSize: 11}}>{text}</span>
            </div>
            <div className='note-footer'>
                <small className='date'>{date}</small>

            <div>
                <CreateIcon className='edit-icon' onClick={()=>handleEditNote(id)} />
                <DeleteIcon className='delete-icon' onClick={handleOpen}/>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    >
                    <Box sx={style}>
                        <div className='delete-modal-text'>
                            <Typography id="modal-modal-title" variant="h6" component="h2" color="black" fontFamily={"Kiwi Maru"} textAlign='center' >
                            Are you sure you want to delete?
                            </Typography>
                        </div>
                        
                        <div className='delete-buttons'>
                            <button className='delete-confirm' onClick={()=>deleteConfirm()}>Yes</button>
                            <button className='delete-deny' onClick={handleClose}>No</button>
                        </div>
                        
                    </Box>
                    </Modal>
            </div>
                
            </div>
        </div>
    )
};

export default Note;