import React from "react";
import "./title.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function TitleItemAtom({ img, name, sport, title, url, link }) {
  const navigate = useNavigate();
  const handleClick4 = () => {
    navigate(url);
  };
  return (
    <div onClick={handleClick4} className="newspaper">
      <div className="news-box">
        <div className="boi">
          <h3 className="">{img}</h3>
          <span>
            <h3 className="text-[12px] font-semibold mt-3">{name}</h3>
            <h4 className="text-[12px]  font-mono">{sport}</h4>
          </span>
        </div>

        <div className="titles">
          <p className="text-[11px] p-2 leading-normal ">{title}</p>
          <Link className="text-[11px] text-blue-600 p-2">{link}</Link>
        </div>
      </div>
    </div>
  );
}

export default TitleItemAtom;
