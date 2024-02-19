import NotesList from "./NotesList"
import { useOutletContext } from "react-router-dom"
import "./Notes1.module.css"
import Search from "./Search"
const NotesGrid = () => {
    const { addNote, deleteNote, editNote, saveEditedNote, notes, searchText, setSearchText } = useOutletContext();

    return (
        <div className="grid-container">
            <Search handleSearchNote={setSearchText}/>
            <NotesList 
              notes={notes.filter((note)=>note.title.toLowerCase().includes(searchText.toLowerCase()))} 
              handleDeleteNote={deleteNote}
              handleAddNote={addNote}
              handleEditNote={editNote}
            />
      </div>  
    )
}

export default NotesGrid;