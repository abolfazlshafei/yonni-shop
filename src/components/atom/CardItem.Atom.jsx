import React from "react";
import { useNavigate } from "react-router-dom";
import "./card.css";

function CardItemAtom({
  img,
  inventory,
  name,
  url,
}) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(url);
  };
  return (
    <div  onClick={handleClick} className="new-peo ">
    
        <h4 className="size-20"> {img}</h4>
        <h3 className="text-[13px] font-semibold">{name}</h3>
        <h3 className="font-mono text-[0.8rem] hover:text-blue-600">{inventory}</h3>
        </div>
  
  );
}

export default CardItemAtom;
