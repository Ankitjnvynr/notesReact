import React, { useState } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../config/firebasedb";

function DeleteNote({ Noteid, noteTime }) {
  
  const deleteNote = async (nodeId) => {
    try {
      await deleteDoc(doc(db, "mynotes", nodeId));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="absolute  right-0 -bottom-1 flex gap-3 ">
      <p className=" text-xs text-slate-400 ">created on {}</p>
      <img
        onClick={() => {
          deleteNote(Noteid);
        }}
        className="w-5 hover:w-6 cursor-pointer transition  group"
        src="https://cdn-icons-png.freepik.com/256/3838/3838817.png"
        alt="del"
      />
    </div>
  );
}

export default DeleteNote;
