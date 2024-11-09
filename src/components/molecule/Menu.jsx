import React, { useState } from "react";
import menu from "../../assets/p.png";
import { BiMenu } from "react-icons/bi";
import { Menuitem } from "../template/reference";
import MenuMol from "./Menu.Mol";

function Menu() {
  const [showMenu, setShowmenu] = useState(true);
  const Clickmenu = () => {
    setShowmenu(!showMenu);
    console.log("hellow");
  };

   return (
    <div className="mr-[-3rem] bg-zinc-200 z-50 p-2 rounded-lg absolute">
      {" "}
      <div onClick={Clickmenu} >
        {<BiMenu />}
      </div>
      {showMenu && (
        <div  className="  w-[8rem]  ">

          <nav>
            <ul className=" gap-5 grid mt-2">
              {Menuitem.map((i)=>(
               <MenuMol {...i}></MenuMol>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}

export default Menu;
