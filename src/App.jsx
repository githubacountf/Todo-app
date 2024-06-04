import Main from "./components/Main"
import Sidebar from "./components/Sidebar"
import './App.css'
import { useEffect, useState } from "react"

function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")) || []);
  const [activeNote, setActiveNote] = useState(false);


  useEffect(() => {
    //localstrageにノートを保存する
    //JavaScriptをJSON形式に変更して保存
    localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes])

  useEffect(() => {
    if (!notes) {
      setActiveNote(notes[0].id)
    }
  }, [])

  const onAddNote = () => {
    // console.log("ok");
    const newNote = {
      id: Math.floor(Math.random() * 100000),
      title: "新しいノート",
      content: "新しいノートの内容",
      modDate: Date.now(),
    };
    setNotes([...notes, newNote]);
    console.log(notes)
  }
  const deleteNote = (id) => {
    let newNote = notes.filter((note) => note.id !== id);
    setNotes([...newNote])
  }
  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote)
  }

  const onUpdateNote = (updateNote) => {
    //修正された新しい配列を返す
    const updateNotesArray = notes.map((note) => {
      if (note.id === updateNote.id) {
        return updateNote;
      } else {
        return note
      }
    })
    setNotes(updateNotesArray)
  }
  // console.log(JSON.parse(localStorage.getItem("notes"))[0])
  return (
    <div className="App">
      <Sidebar onAddNote={onAddNote} deleteNote={deleteNote} notes={notes} activeNote={activeNote} setActiveNote={setActiveNote} />
      <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
    </div>
  )
}

export default App
