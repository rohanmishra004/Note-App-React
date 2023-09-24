import { useState } from "react";

const AddNote = ({handleAddNote}) => {

    const[noteText, setNotesText] = useState('')
    const handleSave = (e) => {
        e.preventDefault();
        handleAddNote(noteText)
    }

    return (
        <div className="note new">
            <textarea
                cols="10" rows="8"
                placeholder="Type to add a new note..."
                value={noteText}
                onChange={(e)=>setNotesText(e.target.value)}
            ></textarea>

            <div className="note-footer">
                <small>200 remaining</small>
                <button
                    className="save"
                    onClick={handleSave}
                >Save</button>
            </div>

        </div>
    )
}


export default AddNote;


