import React from "react";
import ball from "../../assets/boxs/توپ-سرعتی-ایستاده-mamba-bag-1.jpg";
import men from "../../assets/boxs/آدمک-ایستاده-نیم-تنه-پلی-اورتان-1.jpg";
import fruit from "../../assets/boxs/گلابی-بوکس-ایستاده-فنر-وسط-1.jpg";
import stand from "../../assets/boxs/کیسه-بوکس-ایستاده-1.jpg";
import two from "../../assets/boxs/گلابی_بوکس_ایستاده_پایه_دار_دو_فنره-1.jpg";
import "./kise.css";
import { Link } from "react-router-dom";
function KiseMol() {
  return (
    <div className="">
      <ul className="flex justify-center gap-[1rem]">
        <li>
          <Link to="">
            {" "}
            <img src={ball} className="w rounded-md" />
          </Link>
        </li>
        <li>
          <Link to="">
            {" "}
            <img src={men} className=" rounded-md" />
          </Link>
        </li>
        <li>
          <Link to="">
            {" "}
            <img src={fruit} className=" rounded-md" />
          </Link>
        </li>
        <li>
          <Link to="">
          {" "}
          <img src={stand} className=" rounded-md" />
          </Link>
       
        </li>
        <li>
          <Link to="">
          {" "}
          <img src={two} className=" rounded-md" />
          </Link>
        
        </li>
        <li>
          <Link to="">
          {" "}
          <img src={ball} className=" rounded-md" />
          </Link>
   
        </li>
      </ul>
    </div>
  );
}

export default KiseMol;
