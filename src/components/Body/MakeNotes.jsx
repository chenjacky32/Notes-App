import React from "react";
import FormInputNotes from "./FormInputNotes";

export default function MakeNotes({ addNotes }) {
  return (
    <>
      <div className="note-input">
        <h2>Buat Catatan</h2>
        <FormInputNotes addNotes={addNotes} />
      </div>
    </>
  );
}
