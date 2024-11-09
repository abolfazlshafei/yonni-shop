import React from "react";
import { useNavigate } from "react-router-dom";


function ImageItemAtom({ img, url }) {
  const navigate = useNavigate();
  const handleclick7 = () => {
    navigate(url);
  };

  return (
    <div onClick={handleclick7}>
      
        <h3>{img}</h3>
    
    </div>
  );
}

export default ImageItemAtom;
