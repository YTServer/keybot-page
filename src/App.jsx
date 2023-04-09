import React from 'react';
import HomePage from './components/Home';
import HowToBuy from './components/HowToBuy';
import BotScript from './components/BotScript';
import QA from './components/QA';
import AboutMe from './components/AboutMe';
import Navbar from './components/Navbar';

export default class App extends React.Component {
  render() {
    return (
      <div className="min-h-full scrollbar-hide">
        <header className="fixed top-0 mx-auto w-full max-w-full bg-slate-800 scrollbar-hide">
          <Navbar />
        </header>

        <div className="h-screen snap-y snap-mandatory snap-always overflow-y-auto scroll-smooth scrollbar-hide">
          <BotScript />
          <HomePage />
          <AboutMe />
          <HowToBuy />
          <QA />
        </div>
      </div>
    );
  }
}
