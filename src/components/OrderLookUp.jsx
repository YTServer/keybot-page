import React from 'react';
import _ from 'lodash';
import HeroSection from './HeroSection';
import HowToBuy from './HowToBuy';
import BotScript from './BotScript';
import FAQ from './faq';
import Notice from './notice';
import AboutMe from './AboutMe';

export default class OrderLookUp extends React.Component {
  render() {
    return (
      <div className="flex snap-y snap-mandatory snap-always flex-col gap-12 scroll-smooth px-4 md:px-8">
        <section className="mt-28 bg-gray-900">
          <h2 className="text-center text-4xl font-bold text-white">
            聯絡我們
          </h2>
        </section>
      </div>
    );
  }
}
