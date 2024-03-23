import React from "react";

export default function SearchNotes({ onSearch }) {
  return (
    <>
      <div className="note-search">
        <input type="text" placeholder="Cari Catatan..." onChange={onSearch} />
      </div>
    </>
  );
}
