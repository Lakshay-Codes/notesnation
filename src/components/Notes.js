import NoteItem from "./NoteItem";
import React,{ useContext} from "react";
import AddNote from "./AddNote";
import noteContext from '../context/notes/noteContext';

const Notes = () => {
  const context=useContext(noteContext);
  const {notes,setNotes}=context;
  return (
    <>
    <div className="row my-3">
       <AddNote/>
        <h2>Your Notes</h2>
        {notes.map((note)=>{
          return <NoteItem key={note._id} note={note} />
        })}
    </div>
    </>
  )
}

export default Notes