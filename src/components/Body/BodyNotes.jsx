import React from "react";
import MakeNotes from "./MakeNotes";
import ActiveNotes from "./ActiveNotes";
import ArchiveNotes from "./ArchiveNotes";

export default function BodyNotes({ onArchive, notes, FormatDate, addNotes, onDelete }) {
  const activeNotes = notes.filter((note) => !note.archived);
  const archiveNotes = notes.filter((note) => note.archived);

  return (
    <>
      <div className="note-app__body">
        <MakeNotes addNotes={addNotes} />
        <h2>Catatan Aktif</h2>
        {activeNotes.length > 0 ? (
          activeNotes.map((item, index) => <ActiveNotes key={index} id={item.id} onArchive={onArchive} FormatDate={FormatDate} onDelete={onDelete} {...item} />)
        ) : (
          <p className="notes-list__empty-message">Tidak ada Catatan Aktif</p>
        )}

        <h2>Arsip</h2>
        {archiveNotes.length > 0 ? (
          archiveNotes.map((item, index) => <ArchiveNotes key={index} id={item.id} onArchive={onArchive} FormatDate={FormatDate} onDelete={onDelete} {...item} />)
        ) : (
          <p className="notes-list__empty-message">Tidak ada Arsip</p>
        )}
      </div>
    </>
  );
}
