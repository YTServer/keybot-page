import React from 'react';
import BuyProcessCard from './BuyProcessCard';

export default class HowToBuy extends React.Component {
  render() {
    return (
      <div id="how-to-buy" className="grid h-screen max-w-full snap-center">
        <div>
          <BuyProcessCard />
        </div>
      </div>
    );
  }
}
