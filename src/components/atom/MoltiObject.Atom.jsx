import React from "react";
import { useNavigate } from "react-router-dom";
import "./molti.css";
import { Link } from "react-router-dom";
function MoltiObjectAtom({
  img,

  name,
  price,
  url,
}) {
  const navigate = useNavigate();
  const handleClick3 = () => {
    navigate(url);
  };
  return (
    <Link>
      <div onClick={handleClick3} className="hat">
        <h3>{img}</h3>
        <div className="hat-price">
          <p className="font-bold hover:text-red-800 ">{name}</p>
          <h4 className="text-blue-700 text-[13px] font-mono hover:text-blue-400">
            {price}
          </h4>
        </div>
      </div>
    </Link>
  );
}

export default MoltiObjectAtom;
