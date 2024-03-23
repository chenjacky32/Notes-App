import React from "react";
import MakeNotes from "./MakeNotes";
import ActiveNotes from "./ActiveNotes";
import ArchiveNotes from "./ArchiveNotes";

export default function BodyNotes({ onArchive, notes, FormatDate, addNotes, onDelete, SearchItem }) {
  const activeNotes = notes.filter((note) => !note.archived && (note.title.toLowerCase().includes(SearchItem.toLowerCase()) || note.body.toLowerCase().includes(SearchItem.toLowerCase())));
  const archiveNotes = notes.filter((note) => note.archived && (note.title.toLowerCase().includes(SearchItem.toLowerCase()) || note.body.toLowerCase().includes(SearchItem.toLowerCase())));

  return (
    <>
      <div className="note-app__body">
        <MakeNotes addNotes={addNotes} />
        <h2>Catatan Aktif</h2>
        {activeNotes.length > 0 ? (
          activeNotes.map((item, index) => <ActiveNotes key={index} id={item.id} SearchItem={SearchItem} onArchive={onArchive} FormatDate={FormatDate} onDelete={onDelete} {...item} />)
        ) : (
          <p className="notes-list__empty-message">Tidak ada Catatan Aktif</p>
        )}

        <h2>Arsip</h2>
        {archiveNotes.length > 0 ? (
          archiveNotes.map((item, index) => <ArchiveNotes key={index} id={item.id} SearchItem={SearchItem} onArchive={onArchive} FormatDate={FormatDate} onDelete={onDelete} {...item} />)
        ) : (
          <p className="notes-list__empty-message">Tidak ada Arsip</p>
        )}
      </div>
    </>
  );
}
