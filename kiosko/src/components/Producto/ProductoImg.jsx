import React from "react";
import img from '../../assets/1.jpg'
const ProductoImg = () => {
  return (
    <div className="avatar">
      <div className="mask mask-squircle w-12 h-12">
        <img
          src={img}
          alt="Avatar Tailwind CSS Component"
        />
      </div>
    </div>
  ); 
};

export default ProductoImg;
