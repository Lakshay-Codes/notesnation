import NoteContext from './noteContext';
import { useState } from 'react';

const NoteState=(props)=>{
    const notesInitial=[
        {
          "_id": "64856c7271887842a47asfac6d1b",
          "user": "64832f4860cac8638f68f2cb",
          "title": "My title",
          "description": "Please make coffee",
          "tag": "personal",
          "date": "2023-06-11T06:40:50.725Z",
          "__v": 0
        },
        {
          "_id": "64856c74718asf87842a47c6d1d",
          "user": "64832f4860cac8638f68f2cb",
          "title": "My title",
          "description": "Please make coffee",
          "tag": "personal",
          "date": "2023-06-11T06:40:52.342Z",
          "__v": 0
        },
        {
          "_id": "64856c727asf1887842a47c6d1b",
          "user": "64832f4860cac8638f68f2cb",
          "title": "My title",
          "description": "Please make coffee",
          "tag": "personal",
          "date": "2023-06-11T06:40:50.725Z",
          "__v": 0
        },
        {
          "_id": "64856c747asf1887asf842a47c6d1d",
          "user": "64832f4860cac8638f68f2cb",
          "title": "My title",
          "description": "Please make coffee",
          "tag": "personal",
          "date": "2023-06-11T06:40:52.342Z",
          "__v": 0
        },
        {
          "_id": "64856c7271dasf887842a4asdf7c6d1b",
          "user": "64832f4860cac8638f68f2cb",
          "title": "My title",
          "description": "Please make coffee",
          "tag": "personal",
          "date": "2023-06-11T06:40:50.725Z",
          "__v": 0
        },
        {
          "_id": "64856c74718d8784asd2a47c6d1d",
          "user": "64832f4860cac8638f68f2cb",
          "title": "My title",
          "description": "Please make coffee",
          "tag": "personal",
          "date": "2023-06-11T06:40:52.342Z",
          "__v": 0
        },
        {
          "_id": "64856c727188asdas7842a47c6d1b",
          "user": "64832f4860cac8638f68f2cb",
          "title": "My title",
          "description": "Please make coffee",
          "tag": "personal",
          "date": "2023-06-11T06:40:50.725Z",
          "__v": 0
        },
        {
          "_id": "64856c7fassf471887842a47c6d1",
          "user": "64832f4860cac8638f68f2cb",
          "title": "My title",
          "description": "Please make coffee",
          "tag": "personal",
          "date": "2023-06-11T06:40:52.342Z",
          "__v": 0
        },
        {
          "_id": "64856c7887842a476d1b",
          "user": "64832f4860cac8638f68f2cb",
          "title": "My title",
          "description": "Please make coffee",
          "tag": "personal",
          "date": "2023-06-11T06:40:50.725Z",
          "__v": 0
        },
        {
          "_id": "64856c7471842a47c6d1d",
          "user": "64832f4860cac8638f68f2cb",
          "title": "My title",
          "description": "Please make coffee",
          "tag": "personal",
          "date": "2023-06-11T06:40:52.342Z",
          "__v": 0
        },
        {
          "_id": "64856c727187842a47c6d1b",
          "user": "64832f4860cac8638f68f2cb",
          "title": "My title",
          "description": "Please make coffee",
          "tag": "personal",
          "date": "2023-06-11T06:40:50.725Z",
          "__v": 0
        },
        {
          "_id": "64856c747188784247c6d1d",
          "user": "64832f4860cac8638f68f2cb",
          "title": "My title",
          "description": "Please make coffee",
          "tag": "personal",
          "date": "2023-06-11T06:40:52.342Z",
          "__v": 0
        }
      ];
      const [notes, setNotes] = useState(notesInitial);
      //Add a note
      const addNote =(title,description,tag)=>{
        console.log("Adding a new note");
        //TO DO :: API CALL
        const note={
          "_id": "64856c74718878424asfasdf7c6d1d",
          "user": "64832f4860cac8638f68f2cb",
          "title": title,
          "description": description,
          "tag": tag,
          "date": "2023-06-11T06:40:52.342Z",
          "__v": 0
        };
        setNotes(notes.concat(note));
      }
      //Delete a note
      const deleteNote =(id)=>{
        //TO DO :: API CALL
        console.log(`Deleting a note of id :: ${id}`);
        const newNotes=notes.filter((note)=>{return note._id!==id});
        setNotes(newNotes);
      }
      //Edit a note
      const editNote =(id,title,description,tag)=>{

      }
      
    return (
        <NoteContext.Provider value={{notes,addNote,deleteNote}} > 
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;