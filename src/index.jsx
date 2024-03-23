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
      createdAt: new Date(),
    };
    setNotes((prevNotes) => [...prevNotes, newNotes]);
    console.log([...Notes, newNotes]);
  }

  function onDeleteData(id) {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  }

  // function onDeleteData(id) {
  //   const DataNotes = Notes.filter((item) => item.id !== id);
  //   setNotes(DataNotes);
  //   console.log(DataNotes);
  // }

  function SearchNotes(e) {
    setSearch(e.target.value);
    console.log(search);
  }

  function onArchiveData(id) {
    setNotes((prevNotes) => prevNotes.map((note) => (note.id === id ? { ...note, archived: !note.archived } : note)));
  }

  const FilterNotes = Notes.filter((note) => {
    const searchData = search.toLowerCase();
    return note.title.toLowerCase().includes(searchData) || note.body.toLowerCase().includes(searchData);
  });

  return (
    <>
      <HeaderNotes onSearch={SearchNotes} />
      <BodyNotes onArchive={onArchiveData} SearchItem={search} FilterNotes={FilterNotes} notes={Notes} FormatDate={FormatDate} addNotes={addNotesData} onDelete={onDeleteData} />
    </>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
