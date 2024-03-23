import React from "react";
import MakeNotes from "./MakeNotes";
import ActiveNotes from "./ActiveNotes";
import ArchiveNotes from "./ArchiveNotes";

export default function BodyNotes({ onArchive, SearchItem, notes, FormatDate, addNotes, onDelete, FilterNotes }) {
  return (
    <>
      <div className="note-app__body">
        <MakeNotes addNotes={addNotes} />
        <h2>Catatan Aktif</h2>
        {/* Merender jika ada notes dan jika tidak ada notes */}
        {notes.filter((notes) => notes.archived === false).length > 0 ? (
          notes.filter((item) => !item.archived).map((item, index) => <ActiveNotes key={index} id={item.id} onArchive={onArchive} FormatDate={FormatDate} onDelete={onDelete} {...item} />)
        ) : (
          <p className="notes-list__empty-message">Tidak ada Catatan</p>
        )}

        {/* merender jika ada perubahan fitur cari */}
        {SearchItem.length > 0 && FilterNotes.map((item, index) => <ActiveNotes key={index} id={item.id} onArchive={onArchive} FormatDate={FormatDate} onDelete={onDelete} {...item} />)}

        {/* merender jika ada Arsip dan jika tidak ada arsip */}
        <h2>Arsip</h2>
        {notes.filter((notes) => notes.archived === true).length > 0 ? (
          notes.filter((item) => !item.archived).map((item, index) => <ArchiveNotes key={index} id={item.id} onArchive={onArchive} FormatDate={FormatDate} onDelete={onDelete} {...item} />)
        ) : (
          <p className="notes-list__empty-message">Tidak ada Catatan</p>
        )}
      </div>
    </>
  );
}
