import React from "react";
import { routes } from "../template/reference";
import CardItemAtom from "../atom/CardItem.Atom";
import "./product.css";
function ProductMol() {
  return (
    <div className="">
      <div className="flex justify-between">
        <div>
          <h3 className=" text-blue-600 font-bold">جدیدترین محصولات</h3>
          <hr className=" mt-2 text-blue-600  w-32 " />
        </div>
        <button className=" bg-slate-500 px-6 text-white py-1 rounded-md ">بیشتر</button>
      </div>

      <div className="detail-nav gap-3">
        {routes.map((i) => (
          <CardItemAtom {...i} />
        ))}
      </div>
    </div>
  );
}

export default ProductMol;
