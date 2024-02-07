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
  console.log(noteTime.seconds)
  
  const deleteNote = async (nodeId) => {
    try {
      await deleteDoc(doc(db, "mynotes", nodeId));
    } catch (error) {
      console.log(error);
    }
  };
  function formatSecondsToDateTimeString(timestampInSeconds) {
    const timestampInMilliseconds = timestampInSeconds * 1000;
    const date = new Date(timestampInMilliseconds);
  
    // Extract date components
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is 0-indexed, so add 1
    const day = date.getDate().toString().padStart(2, '0');
  
    // Extract time components
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
  
    // Format date and time
    const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  
    return formattedDateTime;
  }
  
  
  

  return (
    <div className="absolute  right-0 -bottom-1 flex gap-3 ">
      <p className=" text-xs text-slate-400 ">created on {formatSecondsToDateTimeString((noteTime.seconds))}</p>
      <img
        onClick={() => {
          deleteNote(Noteid);
        }}
        className="w-5 hover:w-6 cursor-pointer transition right-0  group"
        src="https://cdn-icons-png.freepik.com/256/3838/3838817.png"
        alt="del"
      />
    </div>
  );
}

export default DeleteNote;
