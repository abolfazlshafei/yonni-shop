import React from "react";
import { details } from "../template/reference"
import "./big.css";
import TitleItemAtom from "../atom/TitleItem.Atom";
function BigMol() {
  return (
    <div className="">
      <div className="">
        <h3>نظرات مشتریان و بزرگان رزمی ایران</h3>
      </div>
      <hr />
      <div className="big-title">
        {details.map((i) => (
          <TitleItemAtom {...i} />
        ))}
      </div>
    </div>
  );
}

export default BigMol;
