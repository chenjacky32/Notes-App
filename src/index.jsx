import React, { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { getInitialData, showFormattedDate } from "./utils/index.js";

//component
import HeaderNotes from "./components/Header/HeaderNotes";
import BodyNotes from "./components/Body/BodyNotes.jsx";

// import style
import "./styles/style.css";

export default function App() {
  const GetData = getInitialData();
  const FormatDate = showFormattedDate;

  const [Notes, setNotes] = useState(GetData);
  const [search, setSearch] = useState("");
  const [Archive, setArchive] = useState([]);

  function addNotesData({ title, body }) {
    const newNotes = {
      id: +new Date(),
      title: title,
      body: body,
      archived: false,
      createdAt: new Date(),
    };
    setNotes((prevNotes) => [...prevNotes, newNotes]);
    console.log([...Notes, newNotes]);
  }

  function onDeleteData(id) {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  }

  function onArchiveData(id) {
    setNotes((prevNotes) => prevNotes.map((note) => (note.id === id ? { ...note, archived: !note.archived } : note)));
  }

  function SearchNotes(e) {
    setSearch(e.target.value);
    console.log(search);
  }

  return (
    <>
      <HeaderNotes onSearch={SearchNotes} SearchItem={search} />
      <BodyNotes onArchive={onArchiveData} SearchItem={search} notes={Notes} FormatDate={FormatDate} addNotes={addNotesData} onDelete={onDeleteData} />
    </>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
