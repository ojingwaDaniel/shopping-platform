import React from "react";
import "./collection.item.style.scss";
import {connect} from 'react-redux';
import CustomButton from "../custom-buttom/custom-buttom.component";
import {addItem} from '../'

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
);
const mapDispatchToProps = dispatch=>({
  addItem : item => dispatch(addItem(item))
}

)
export default connect() CollectionItem;