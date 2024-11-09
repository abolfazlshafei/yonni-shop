import React from "react";
import "./link.css";
import { FaInstagram } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { IoIosFilm } from "react-icons/io";
function LinkMol() {
  return (
    <section className=" flex justify-around py-9">
      <div className="sec-low ">
        <ul className="wet">
          <li className="bold">راهنمای خرید</li>
          <li>چطوری اعتماد کنم؟</li>
          <li>چطوری بخرم؟</li>
          <li>چطوری پرداخت کنم؟</li>
        </ul>
      </div>

      <div className="sec-low">
        <ul className="wet">
          <li className="bold">خدمـات مـشــتریان</li>
          <li>پیگیری سفارش</li>
          <li>فروش عمده</li>
          <li>پرسش های متداول</li>
        </ul>
      </div>

      <div className="sec-low">
        <ul className="wet">
          <li className="bold">دسترسی سریع</li>
          <li>حساب کاربری</li>
          <li>لیست علاقه مندی</li>
          <li>ارتباط با ما</li>
        </ul>
      </div>

      <div className="sec-low">
        <h3 className=" mt-1  text-[10px] font-bold ">همراه ما باشید</h3>
        <ul className="flex gap-3">
        
          <li><FaInstagram className="size-8"/></li>
          <li><BsTelegram  className="size-8"/></li>
          <li><FaYoutube className="size-8"/></li>
          <li><IoIosFilm className="size-8" /></li>
        </ul>
      </div>
    </section>
  );
}

export default LinkMol;
