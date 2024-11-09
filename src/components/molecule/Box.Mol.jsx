import React from "react";
import ice from "../../assets/img/final-01-mobile.png";
import "./box.css";
import LiveItemAtom from "../atom/liveItem.Atom";
import { sells } from "../template/reference";

function BoxMol() {
  return (
    <div className=" bg-red-500 rounded-2xl py-10 ">
      <div className=" p-6 flex justify-between w-[80%]">
        <div className="">
          <img src={ice} alt="" className=" p-2  " />
        </div>

        <div className=" flex gap-4">
          {sells.map((i) => (
            <LiveItemAtom {...i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BoxMol;
