import React from "react";
import NotesItemCard from "./NotesItemCard";

function NotesList({ removeArchive, addArchive, isArchived, notes, onDelete }) {
  const filteredNotes = notes.filter((note) => note.archived == isArchived)

  if(filteredNotes.length !== 0){
    return (
      <div className="container">
          <h2 className="container-header mb-4">{isArchived ? "Arsip" : "Catatan Aktif"}</h2>
          <div className="list-item">
            <div className="row">
            {
              filteredNotes.map((note) => (
                <NotesItemCard 
                addArchive={addArchive}
                removeArchive={removeArchive}
                key={note.id}
                id={note.id}
                onDelete={onDelete}
                {...note} />
              ))
            }
            </div>
          </div>
      </div>
  );
 } else {
  return(
    <div className="container">
          <h2 className="container-header mb-4">{isArchived ? "Arsip" : "Catatan Aktif"}</h2>
          <h4 className="text-center text-secondary">Tidak ada catatan</h4>
    </div>
  )
 }
}
 
 export default NotesList;