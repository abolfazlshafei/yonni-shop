import React from "react";
import { useNavigate } from "react-router-dom";
import "./live.css";
function LiveItemAtom({ img, title, number, price, url }) {
  const navigate = useNavigate();
  const handleClick3 = () => {
    navigate(url);
  };
  return (
    <div onClick={handleClick3} className="fish">
      <h3 className="size-20">{img}</h3>
      <h6 className="text-[11px] p-2 font-bold mt-2">{title}</h6>
      <p className="text-[11px]">{number}</p>
      <h2 className="text-[12px] text-blue-600 font-mono">{price}</h2>
    </div>
  );
}

export default LiveItemAtom;
