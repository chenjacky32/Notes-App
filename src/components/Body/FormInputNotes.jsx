import React, { useState } from "react";
import ResultInput from "./ResultInput";

export default function FormInputNotes({ addNotes }) {
  const [judul, setJudul] = useState("");
  const [isi, setIsi] = useState("");
  const [sisa, setSisa] = useState("");
  const MaxLength = 50;

  //   Event
  function EventGantiJudul(e) {
    const Hitung = e.target.value;
    if (Hitung.length <= MaxLength) {
      setSisa(Hitung);
      setJudul(Hitung);
    }

    // console.log(judul);
  }

  function EventGantiIsi(e) {
    setIsi(e.target.value);
    // console.log(isi);
  }

  function EventHandleSubmit(e) {
    e.preventDefault();
    addNotes({ title: judul, body: isi });

    setJudul("");
    setIsi("");
  }

  return (
    <>
      <form onSubmit={EventHandleSubmit}>
        <ResultInput MaxLength={MaxLength} Sisa={sisa} judul={judul} isi={isi} UbahJudul={EventGantiJudul} UbahIsi={EventGantiIsi} />
      </form>
    </>
  );
}
