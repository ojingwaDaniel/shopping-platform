import React from "react";
import "./collection.item.style.scss"
import CustomButton from "../custom-buttom/custom-buttom.component";
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
    <CustomButton inverted>ADD TO CHART</CustomButton>
  </div>
)
export default CollectionItem