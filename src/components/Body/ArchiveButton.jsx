import React from "react";

export default function ArchiveButton({ onArchive }) {
  {
    return (
      <button className="note-item__archive-button" onClick={onArchive}>
        Arsip
      </button>
    );
  }
}
