import React, { useEffect, useState } from "react";
import { db } from "../config/firebasedb";
import { collection, doc, onSnapshot, updateDoc } from "firebase/firestore";

function Notes() {
  const handling = (event) => {
    console.log(event.target.innerHTML);
  };

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
      await updateDoc(noteRef, { note: updatedNote });
      console.log("Note updated successfully!");
    } catch (error) {
      console.error("Error updating note: ", error);
    }
  };

  return (
    <>
      {data.map((note) => (
        <div
          key={note.id}
          contentEditable={true}
          onBlur={(e) => handleUpdateNote(note.id, e.target.innerHTML)}
          className="text-sm leading-4 mt-3 bg-yellow-50 p-2 rounded-xl">
          {note.note}
        </div>
      ))}
    </>
  );
}

export default Notes;
