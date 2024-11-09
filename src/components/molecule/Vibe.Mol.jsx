import React from "react";

import ImageItemAtom from "../atom/ImageItem.Atom";
import { images } from "../template/reference";
function VibeMol() {
  return (
    <div className=" flex w-full justify-center gap-20 mt-20 ">
      {images.map((i) => (
        <ImageItemAtom {...i} />
      ))}
    </div>
  );
}

export default VibeMol;
