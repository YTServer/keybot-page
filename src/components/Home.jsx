import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import HowToBuy from './HowToBuy';
import BotScript from './BotScript';
import FAQ from './faq';
import Notice from './notice';
import AboutMe from './AboutMe';
export default class Home extends React.Component {
  render() {
    return (
      <div>
        <header className="fixed top-0 mx-auto w-full max-w-full bg-slate-800 scrollbar-hide">
          <Navbar />
        </header>
        <div className="flex snap-y snap-mandatory snap-always flex-col gap-12 scroll-smooth px-4 md:px-8">
          <HeroSection />
          <HowToBuy />
          <BotScript />
          <Notice />
          <FAQ />
          <AboutMe />
        </div>
      </div>
    );
  }
}
