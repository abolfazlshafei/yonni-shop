import React from "react";
import { Link } from "react-router-dom";
import foot from "../../assets/order/RW1202.jpg";
import mma from "../../assets/order/RW1201-2.jpg";
import hats from "../../assets/order/RW1204.jpg";
import shoes from "../../assets/order/RW1203.jpg";
import "./order.css";
function OrderMol() {
  return (
    <div className="">
      <ul className="flex flex-wrap justify-center gap-5">
        <Link to="">
          <li>
            <img src={foot} className=" rounded-md" />
          </li>
        </Link>

        <Link to=''>
          {" "}
          <li>
            <img src={mma} className=" rounded-md" />
          </li>
        </Link >

        <Link to="">
          <li>
            <img src={hats} alt="" className=" rounded-md" />
          </li>
        </Link>
        <Link to=''>
          <li>
            <img src={shoes} alt="" className=" rounded-md" />
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default OrderMol;
