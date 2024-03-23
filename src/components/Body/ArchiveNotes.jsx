import React from "react";

export default function ArchiveNotes({ id, title, FormatDate, body, createdAt, onDelete, onArchive }) {
  return (
    <>
      <div className="notes-list">
        <div className="note-item">
          <div className="note-item__content">
            <h3 className="note-item__title">{title}</h3>
            <p className="note-item__date">{FormatDate(createdAt)}</p>
            <p className="note-item__body">{body}</p>
          </div>
          <div className="note-item__action">
            <ArchiveButton onArchive={onArchive} id={id} />
            <DeleteButton onDelete={onDelete} id={id} />
          </div>
        </div>
      </div>
    </>
  );
}
