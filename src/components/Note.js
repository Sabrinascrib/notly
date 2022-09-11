import React from "react";
import { MdDeleteForever } from "react-icons/md";

export const Note = () => {
  return (
    <div className="note w-96">
      <span>Hello! This is our first note! </span>

      <div className="note-footer bg-slate-600 flex flex-row">
        <small className="text-red-400">11/11/2022</small>
        <MdDeleteForever className="delete-icon" size="1.3em" />
      </div>
    </div>
  );
};
