import React from "react";

function NavBar() {
  return (
    <div>
      <div className=" bg-red-600 text-white p-2 h-12 flex justify-center gap-3 items-center rounded-md text-xl font-bold">
        <img className="h-full" src="images/logo.png" alt="" />
        My Notes
      </div>
    </div>
  );
}

export default NavBar;
