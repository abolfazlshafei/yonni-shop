import React from "react";
import { useNavigate } from "react-router-dom";
import "./lastitem.css";
import { Link } from "react-router-dom";
function LastItemAtom({ img, title, price, url }) {
  const navigate = useNavigate();
  const handleClick5 = () => {
    navigate(url);
  };

  return (
    <Link>
      <div onClick={handleClick5} className="roof">
        <h3>{img}</h3>
        <h4 className="text-[12px] font-semibold ">{title}</h4>
        <h3 className="text-[12px] font-mono hover:text-gray-500">{price}</h3>
      </div>
    </Link>
  );
}

export default LastItemAtom;
