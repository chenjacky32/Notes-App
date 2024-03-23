import React from "react";

export default function SearchNotes({ onSearch, SearchItem }) {
  return (
    <>
      <div className="note-search">
        <input type="text" placeholder="Cari Catatan..." onChange={onSearch} value={SearchItem} />
      </div>
    </>
  );
}
