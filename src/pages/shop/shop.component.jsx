import React from "react";
import ShopData from "./shop.data";
class ShopPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          collections: ShopData
        };
    }
}