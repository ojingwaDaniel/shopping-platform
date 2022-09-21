import React from "react";
import ShopData from "./shop.data";
class ShopPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          collections: ShopData
        };
    }
    render(){
        return(
            <div>
                <h1>SHOP PAGE</h1>
            </div>
        )
    }
}
export default ShopPage