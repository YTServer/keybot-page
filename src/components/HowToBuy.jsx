import React from 'react';
import BuyProcessCard from './BuyProcessCard';

export default class HowToBuy extends React.Component {
  render() {
    return (
      <div id="buy">
        <h2 className="text-center text-4xl font-bold text-white">購買流程</h2>
        <BuyProcessCard />
      </div>
    );
  }
}
