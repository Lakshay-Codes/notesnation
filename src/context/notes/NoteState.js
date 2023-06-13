import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  //Get all note
  const getNotes = async() => {
    // TO DO :: API CALL
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET", 
      headers: {
        "Content-Type": "application/json",
        "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ4MzJmNDg2MGNhYzg2MzhmNjhmMmNiIn0sImlhdCI6MTY4NjU5MTc0MH0.eOkhveXBjNfJXN7OBjPPmSy6y572qrow9UxDJrATDX0",
      }
    });
    const json=await response.json();
    console.log(json);
    setNotes(json);
  };
  //Add a note
  const addNote = async(title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ4MzJmNDg2MGNhYzg2MzhmNjhmMmNiIn0sImlhdCI6MTY4NjU5MTc0MH0.eOkhveXBjNfJXN7OBjPPmSy6y572qrow9UxDJrATDX0",
      },
      body:JSON.stringify({title,description,tag})
    });
    const json=await response.json();
    console.log(json);
    const note = {
      _id: "64856c74718878424asfasdf7c",
      user: "64832f4860cac8638f68f2cb",
      title: title,
      description: description,
      tag: tag,
      date: "2023-06-11T06:40:52.342Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };
  //Delete a note
  const deleteNote = async(id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE", 
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ4MzJmNDg2MGNhYzg2MzhmNjhmMmNiIn0sImlhdCI6MTY4NjU5MTc0MH0.eOkhveXBjNfJXN7OBjPPmSy6y572qrow9UxDJrATDX0",
      },
    });
    const json=await response.json();
    console.log(json);
    console.log(`Deleting a note of id :: ${id}`);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };
  //Edit a note
  const editNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT", 
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ4MzJmNDg2MGNhYzg2MzhmNjhmMmNiIn0sImlhdCI6MTY4NjU5MTc0MH0.eOkhveXBjNfJXN7OBjPPmSy6y572qrow9UxDJrATDX0",
      },
      body: JSON.stringify({title, description, tag}),
    });
    let newNotes = JSON.parse(JSON.stringify(notes));
    for (let index = 0; index < newNotes.length; index++) {
      if (newNotes[index]._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes); 
    const json=await response.json();
    console.log(json);
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, getNotes, editNote}}>
      {props.children} 
    </NoteContext.Provider>
  );
};

export default NoteState;
