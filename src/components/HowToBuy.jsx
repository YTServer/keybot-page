import React from "react";
import _ from "lodash";
import BuyProcessCard from "./BuyProcessCard";

export default class HowToBuy extends React.Component {
  render() {
    return (
      <div id="how-to-buy" className="h-screen snap-center max-w-full grid">
        
        <div><BuyProcessCard/></div>  
      </div>
    );
  }
}
