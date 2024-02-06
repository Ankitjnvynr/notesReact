import React from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebasedb";

function NewNote() {
  const addNote = async () => {
    try {
      const notesRef = collection(db, "mynotes");
      await addDoc(notesRef, { note: "", timestamp: serverTimestamp() });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      onClick={addNote}
      className=" h-10 flex items-center cursor-pointer justify-center gap-1 text-sm text-center font-bold leading-4 mt-3 bg-yellow-50 p-2 rounded-xl">
      <img
        className="h-4"
        src="https://www.pngitem.com/pimgs/m/148-1489006_pencil-icon-png-free-transparent-png.png"
        alt=""
      />
      Add New Note{" "}
      
    </div>
  );
}

export default NewNote;
