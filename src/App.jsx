import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchBotStatus } from './models/reducer';
import HomePage from './components/Home';
import HowToBuy from './components/HowToBuy';
import BotScript from './components/BotScript';
import QA from './components/QA';
import AboutMe from './components/AboutMe';
import Navbar from './components/Navbar';
import { EnvelopeIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBotStatus();
  }

  render() {
    return (
      <div className="min-h-full scrollbar-hide">
        <header className="fixed top-0 mx-auto w-full max-w-full bg-slate-800 scrollbar-hide">
          <Navbar />
        </header>

        <div className="flex snap-y snap-mandatory snap-always flex-col gap-12 scroll-smooth px-8">
          <HomePage />
          <BotScript />
          <HowToBuy />
          <QA />
          <AboutMe />
        </div>
        <footer className="m-4 rounded-lg bg-white shadow dark:bg-gray-900">
          <div className="mx-auto w-full max-w-screen-xl p-4 md:py-8">
            <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
            <div className="mb-2 flex items-center justify-center text-gray-500">
              <EnvelopeIcon className="h-6 w-6" />
              <p className="ml-2">admin@whitey.me</p>
            </div>
            <span className="block text-sm text-gray-500 dark:text-gray-400 sm:text-center">
              © 2023 Whitey. All rights reserved.
            </span>
          </div>
        </footer>
        {/* <footer>
          <div className="py-4 text-gray-400">
            <div className="flex flex-col items-center">
              <div>
                <div className="flex items-center text-gray-500">
                  <EnvelopeIcon className="h-6 w-6" />
                  <p className="ml-2">admin@whitey.me</p>
                </div>
                <div className="flex items-center text-gray-500">
                  <GlobeAltIcon className="h-6 w-6" />
                  <p className="ml-2">https://tf2key.whitey.me/</p>
                </div>
              </div>
              <p>© 2023 Whitey. All rights reserved.</p>
            </div>
          </div>
        </footer> */}
      </div>
    );
  }
}

App.propTypes = {
  fetchBotStatus: PropTypes.func.isRequired,
};

const mapDispatchToProps = { fetchBotStatus };

export default connect(null, mapDispatchToProps)(App);
