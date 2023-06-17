import NoteItem from "./NoteItem";
import React, { useContext, useEffect, useRef, useState } from "react";
import {useNavigate} from 'react-router-dom'
import AddNote from "./AddNote";
import noteContext from "../context/notes/noteContext";

const Notes = (props) => {
  let navigate=useNavigate();
  const context = useContext(noteContext);
  const {notes, getNotes, editNote} = context;
  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
  });
  useEffect(() => {
    //Since useEffect without any changing parameter is nothing but a mere component did mount
    //We are gonna make sure that the component only mounts when we have auth token for a particular
    //user in local storage
    if(localStorage.getItem('token')!==undefined){ 
      getNotes();
    }else{
      navigate('/login');
    }
    // eslint-disable-next-line
  }, []);
  const ref = useRef(null);
  const refClose = useRef(null);
  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag:currentNote.tag});
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  const handleClick = (e) => {
    editNote(note.id,note.etitle,note.edescription,note.etag);
    refClose.current.click();
    props.showAlert("Notes updated Successfully","success")
  };
  return (
    <>
      <div className="row my-3">
        <AddNote showAlert={props.showAlert} />
        <button 
          type="button"
          className="btn btn-primary d-none"
          data-bs-toggle="modal"
          ref={ref}
          data-bs-target="#exampleModal"
        >
          Launch demo modal
        </button>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Edit Note
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form className="my-3">
                  <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                      Title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="etitle"
                      value={note.etitle}
                      name="etitle"
                      onChange={onChange}
                      aria-describedby="emailHelp"
                      minLength={5}
                      required                    
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                      Description
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="edescription"
                      value={note.edescription}
                      name="edescription"
                      onChange={onChange}
                      minLength={5}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="tag" className="form-label">
                      Tag
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="etag"
                      name="etag"
                      value={note.etag}
                      onChange={onChange}
                      minLength={5}
                      required
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  ref={refClose}
                >
                  Close
                </button>
                <button disabled={note.etitle.length<5 || note.edescription.length<5 || note.etag.length<5} type="button" onClick={handleClick} className="btn btn-primary">
                  Update Note
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <h2>Your Notes</h2>
        {notes.length===0 && <div className="container mx-1">No notes to display </div>}
        {notes.map((note) => {
          return (
            <NoteItem key={note._id} showAlert={props.showAlert} updateNote={updateNote} note={note} />
            );
          })}
      </div>
    </>
  );
};

export default Notes;
