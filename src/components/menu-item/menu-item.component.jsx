import React from "react";
import '../menu-item/menu-item.style.css'
const MenuItem = ({ title, imageUrl,size}) => (
  <div className={`${size} menu-item`}style={{
    backgroundImage : `url(${imageUrl})`
  }}>
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="sub-title"> SHOP NOW</span>
    </div>
  </div>
);
export default MenuItem