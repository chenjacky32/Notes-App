import React from "react";

export default function ResultInput({ judul, isi, UbahJudul, UbahIsi, Sisa, MaxLength }) {
  return (
    <>
      <p className="note-input__title__char-limit">Sisa Karakter: {MaxLength - Sisa.length} </p>
      <input className="note-input__title" type="text" placeholder="ini adalah judul ..." required value={judul} onChange={UbahJudul} />
      <textarea className="note-input__body" type="text" placeholder="Tuliskan catatanmu disini..." required value={isi} onChange={UbahIsi}></textarea>
      <button type="submit">Buat</button>
    </>
  );
}
