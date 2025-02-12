import React from "react";
import SearchNotes from "./SearchNotes";

export default function HeaderNotes({ onSearch, SearchItem }) {
  return (
    <>
      <div className="note-app__header">
        <h1>Notes</h1>
        <SearchNotes onSearch={onSearch} SearchItem={SearchItem} />
      </div>
    </>
  );
}
