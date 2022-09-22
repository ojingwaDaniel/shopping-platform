import React from "react";
import "./collection.item.style.scss"
const CollectionItem = ({ imageUrl, id, name, price }) => (
  <div className="collection-item" key={id}>
    <div
      className="image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    ></div>
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">${price}</span>
    </div>
  </div>
);
export default CollectionItem