import React from "react";
import "./home.css";
import KiseMol from "../molecule/Kise.Mol";
import ProductMol from "../molecule/Product.Mol";
import PicAtom from "../atom/Pic.Atom";
import BoxMol from "../molecule/Box.Mol";
import MoreMol from "../molecule/More.Mol";
import BigMol from "../molecule/Big.Mol";
import LastMol from "../molecule/Last.Mol";
import Imageslider from "../../Imageslider";
import VibeMol from "../../components/molecule/Vibe.Mol";
import OrderMol from "../molecule/Order.Mol";

function Home() {
  return (
    <div className="w-full mx-auto ">

      <div className="">
        <div className=" flex justify-center">
          <Imageslider></Imageslider>
        </div>
        <div className=" grid max-w-7xl mx-auto gap-20 ">
          <div className="  ">
            <VibeMol />
          </div>
          <div>
            <BoxMol />
          </div>

          <div className="">
            <ProductMol />
          </div>
          <div>
            <MoreMol />
          </div>

          <div>
            <PicAtom />
          </div>

          <div>
            <LastMol />
          </div>

          <div>
            <KiseMol />
          </div>
          <div>
            <BigMol />
          </div>

          <div>
            <OrderMol />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
