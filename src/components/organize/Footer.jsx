import React from "react";
import LinkMol from "../molecule/Link.Mol";
import { FaLocationDot } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { HiOutlineMailOpen } from "react-icons/hi";

function Footer() {
  return (
    <div className=" w-full ">
      <div className="flex mx-auto gap-[2rem] bg-gray-600 text-white h-[5rem] justify-center items-center">
        <div className=" flex items-center gap-3">
          <FaLocationDot />
          <p className="">آدرس: تهران — بالاتر از میدان منیریه – شماره 955</p>
        </div>
        <div  className=" flex items-center gap-3">
          <IoCallOutline />
          <p className="">تماس: ۶۶۴۵۶۰۶۵ – ۰۲۱ (پاسخگویی 10 صبح الی 17)</p>
        </div>

        <div  className=" flex items-center gap-3">
          <HiOutlineMailOpen />
          <p className="">info@takrazm.com</p>
        </div>
      </div>

      <div className=" w-full mx-auto">
        <LinkMol />
      </div>
    </div>
  );
}

export default Footer;
