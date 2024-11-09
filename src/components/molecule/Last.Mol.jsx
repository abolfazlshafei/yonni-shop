import React from "react";
import "./last.css";
import LastItemAtom from "../atom/LastItem.Atom";
import { lasts } from "../template/reference";
function LastMol() {
  return (
    <div className="">
      <h3 className=""> دستکش بوکس</h3>
    <hr className="mt-2" />
      <div className=" flex justify-center  gap-4">
        {lasts.map((i) => (
          <LastItemAtom {...i} />
        ))}
      </div>
    </div>
  );
}

export default LastMol;
