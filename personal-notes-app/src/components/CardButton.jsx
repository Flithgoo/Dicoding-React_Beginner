import React from "react";


function CardButton({ id, archived, onDelete, addNoteToArchive, removeNoteFromArchive }) {  
  const ArchiveBtn = () => <a className="btn btn-primary m-1" onClick={() =>addNoteToArchive(id)}>Arsipkan</a>;
  const UnarchiveBtn = () => <a className="btn btn-primary m-1" onClick={() =>removeNoteFromArchive(id)}>Pindahkan</a>;
  const DeleteBtn = () => <a href="#popup" className="btn btn-danger m-1" onClick={() => onDelete(id)}>Hapus</a>;

  if (archived) {
    return(
      <>
        <UnarchiveBtn/>
        <DeleteBtn/>
      </>      
    )
  } else if (!archived) {
    return (
      <>
        <ArchiveBtn/>
        <DeleteBtn/>
      </>
    )
  }
}

export default CardButton