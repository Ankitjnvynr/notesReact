import React from "react";

function Notes() {
  const handling = (event) => {
    console.log(event.target.innerHTML);
  };

  return (
    <div
      contentEditable={true}
      onInput={handling}
      className=" text-sm leading-4 mt-3 bg-yellow-50 p-2 rounded-xl">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, earum! Et
      corrupti sequi quibusdam odit impedit quod eos, excepturi architecto quo
      omnis culpa, iure sit ex a quae expedita fuga.
    </div>
  );
}

export default Notes;
