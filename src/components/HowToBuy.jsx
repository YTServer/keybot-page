import React from 'react';
import BuyProcessCard from './BuyProcessCard';

export default class HowToBuy extends React.Component {
  render() {
    return (
      <div id="buy">
        <h2 className="text-center text-4xl font-bold text-white">購買流程</h2>
        <section className="mx-auto max-w-screen-xl items-center py-8 px-4 sm:py-16 lg:px-6">
          <BuyProcessCard />
        </section>
      </div>
    );
  }
}
