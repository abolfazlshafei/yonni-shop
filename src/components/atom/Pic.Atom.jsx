import React from "react";
import { Link } from "react-router-dom";
import yoga from "../../assets/img/Box/yaga1.jpg"
import dambel from "../../assets/img/Box/dambel.jpg"
function PicAtom() {
  return (
    <Link>
      <div className=" flex justify-center  mx-auto gap-6">
        <img src={yoga} alt="yoga" className="rounded-xl shadow-xl " />
        <img src={dambel} alt="gym" className=" rounded-xl shadow-2xl " />
      </div>
    </Link>
  );
}

export default PicAtom;
