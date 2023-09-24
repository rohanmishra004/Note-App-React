import { useState } from "react";
import {nanoid} from 'nanoid'
import NotesList from "./components/NotesList";
function App() {

  const [notes, setNotes] = useState([{
    id :nanoid(),
    text: "This is my first Note",
    date:"15/09/2023"
  },
  {
    id :nanoid(),
    text: "This is my second Note",
    date:"15/09/2023"
  },
  {
    id :nanoid(),
    text: "This is my third Note",
    date:"15/09/2023"
    }]) 
  
  
  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id:nanoid(),
      text: text,
      date:date.toLocaleDateString()
    }
    setNotes([...notes, newNote])

  }
  return (
    <div className="container">
      <NotesList notes={notes} handleAddNote={addNote} />
    </div>
  );
}

export default App;
