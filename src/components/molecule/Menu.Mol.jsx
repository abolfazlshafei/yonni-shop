import React from 'react'
import { useNavigate } from 'react-router-dom';
import'../page/home.css'
function MenuMol({title , url}) {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(url);
      };
  return (
    <div className='menu' onClick={handleClick}>
        <li  className=' hover:bg-white p-1'>{title}</li>
    </div>
  )
}

export default MenuMol