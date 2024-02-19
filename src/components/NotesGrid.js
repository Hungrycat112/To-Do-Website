import NotesList from "./NotesList"
import { useOutletContext } from "react-router-dom"
import "./Notes1.module.css"
import Search from "./Search"
const NotesGrid = () => {
    const { addNote, deleteNote, notes, searchText, setSearchText } = useOutletContext();

    return (
        <div className="container">
            <Search handleSearchNote={setSearchText}/>
            <NotesList 
              notes={notes.filter((note)=>note.title.toLowerCase().includes(searchText.toLowerCase()))} 
              handleDeleteNote={deleteNote}
              handleAddNote={addNote}
            />
      </div>  
    )
}

export default NotesGrid;