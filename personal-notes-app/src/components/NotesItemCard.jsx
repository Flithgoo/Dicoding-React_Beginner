import React from "react";
import NotesItemCardButton from "./CardButton";
import CardButton from "./CardButton";

function NotesItemCard({ removeArchive, addArchive, id, title, body, archived, createdAt, onDelete }) {  
  return (
    <div className="col-sm-6 mb-4 d-flex">
      <div className="card shadow align-items-stretch">
        <div className="card-body">
          <h5 className="card-title"><b>{title}</b></h5>
          <h6 className="card-subtitle mb-2 text-muted">{new Date(createdAt).toLocaleDateString('id-ID', {
            weekday: 'long', 
            day: 'numeric',  
            month: 'long',   
            year: 'numeric'  
          })}</h6>
          <p className="card-text">
            {body}
          </p>
        </div>
        <div className="card-footer text-end">
          <CardButton removeNoteFromArchive={removeArchive} addNoteToArchive={addArchive} archived={archived} id={id} onDelete={onDelete}/>
        </div>
      </div>
    </div>
  );
 }
  
 export default NotesItemCard;