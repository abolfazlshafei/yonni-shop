import React from "react";
import logo from "../../assets/logo/logo-tr.png";
import { MdCall } from "react-icons/md";
import { MdPersonalInjury } from "react-icons/md";
import { SlBasket } from "react-icons/sl";

import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";



function Header() {
  return (
    <div className=" w-full">
      <div className="  flex justify-between items-center  gap-4 p-2 ">
        <img src={logo} alt="logo" className=" w-[5rem] h-[4rem]" />
        <div className="flex  ">
        <div>

        </div>{" "}
        <form
          action="#"
          className="flex w-[40rem] justify-between bg-white p-[0.5rem] rounded-lg items-center   ">
          <input
            type="search"
            placeholder="جستجو در محصولات"
            className="input  focus:outline-none"
          />

          <button className="btn rounded-r-none rounded-l-lg">
            <IoSearch />
          </button>
        </form>
      </div>
        <div className="flex gap-4 ">
          {" "}
          <Link className="p-4  border rounded-full bg-slate-300 text-gray-800">
            {<MdCall />}
          </Link>
          <Link
            className="p-4 border rounded-full bg-slate-300 text-gray-700"
            to="/login">
            {<MdPersonalInjury />}
          </Link>
          <Link className="border text-white w-[3.2rem] h-[3.2rem]  rounded-full bg-slate-500  items-center text-base size-8 flex justify-center">
            {<SlBasket />}
          </Link>
        </div>
      </div>


    </div>
  );
}

export default Header;

//      <div className="section-2 ">
//        <h3 className="yoni">یونی شاپ</h3>

//        <h6 className="yoni-2">
//         سوالی دارید؟تماس بگیرید < className="span">09102684557<///span>{" "}
//       </h6>
//     </div>

//<div className="personal">
//<Link className="flex justify-center p-2 items-center">
//  {<MdPersonalInjury />}
//</Link>
//</div>

//<div className="top-nav2">
//<Link className="hover:text-blue-700"> حساب کاربری</Link>
//<p className="text-[10px]">لطفا وارد حساب خود شوید </p>
//</div>
