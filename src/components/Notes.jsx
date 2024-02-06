import React, { useEffect, useState } from "react";
import { db } from "../config/firebasedb";
import { collection, doc, onSnapshot, updateDoc } from "firebase/firestore";
import DeleteNote from "./DeleteNote";

function Notes() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getNotes = async () => {
      try {
        const notesRef = collection(db, "mynotes");
        onSnapshot(notesRef, (snapshot) => {
          const notesList = snapshot.docs.map((doc) => {
            
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          notesList.sort((a, b) => b.timestamp - a.timestamp);
          setData(notesList);
          return notesList;
        });
      } catch (error) {
        console.log(error);
      }
    };
    getNotes();
  }, []);

  const handleUpdateNote = async (id, updatedNote) => {
    try {
      const noteRef = doc(db, "mynotes", id);
      await updateDoc(noteRef, { note: encodeURIComponent(updatedNote) });
      console.log("Note updated successfully!");
    } catch (error) {
      console.error("Error updating note: ", error);
    }
  };

  

  return (
    <>
      {data.map((note) => (
        <div key={note.id} className="relative group-hover:bg-red-500">
          <div
            contentEditable={true}
            onBlur={(e) => handleUpdateNote(note.id, e.target.innerHTML)}
            className="text-sm shadow-md leading-4 mt-3 bg-yellow-50 p-3 pb-5 rounded-xl cursor-text"
            dangerouslySetInnerHTML={{ __html: decodeURIComponent(note.note) }}
          />
          <DeleteNote Noteid ={note.id} noteTime={note.timestamp} />
        </div>
      ))}
    </>
  );
}

export default Notes;
