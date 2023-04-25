import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchBotStatus } from './models/reducer';
import HomePage from './components/Home';
import HowToBuy from './components/HowToBuy';
import BotScript from './components/BotScript';
import FAQ from './components/faq';
import AboutMe from './components/AboutMe';
import Navbar from './components/Navbar';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import vars from './variable';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBotStatus();
  }

  render() {
    return (
      <HelmetProvider>
        <div className="min-h-full scrollbar-hide">
          <Helmet>
            <meta
              name="description"
              content="購買 TF2 鑰匙，即可立即取貨！提供四大超商代碼繳費。此外，我們的價格比市集及曼恩商店更便宜且不受限制交易，讓你除了省錢外還能馬上使用它們去交易自己心儀的各種裝飾品、嘲諷、異常帽。"
            />
            <title>Whitey’s TF2 Key Bot </title>
            <link rel="icon" type="image/svg+xml" href={vars.botAvatar} />
          </Helmet>
          <header className="fixed top-0 mx-auto w-full max-w-full bg-slate-800 scrollbar-hide">
            <Navbar />
          </header>

          <div className="flex snap-y snap-mandatory snap-always flex-col gap-12 scroll-smooth px-4 md:px-8">
            <HomePage />
            <HowToBuy />
            <BotScript />
            <FAQ />
            <AboutMe />
          </div>
          <footer className="m-4 rounded-lg bg-white shadow dark:bg-gray-900">
            <div className="mx-auto w-full max-w-screen-xl p-4 md:py-8">
              <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
              <div className="mb-2 flex items-center justify-center text-gray-500">
                <EnvelopeIcon className="h-6 w-6" />
                <p className="ml-2">admin@whitey.me</p>
              </div>
              <span className="block text-center text-sm text-gray-400">
                © 2023 Whitey. All rights reserved.
              </span>
            </div>
          </footer>
        </div>
      </HelmetProvider>
    );
  }
}

App.propTypes = {
  fetchBotStatus: PropTypes.func.isRequired,
};

const mapDispatchToProps = { fetchBotStatus };

export default connect(null, mapDispatchToProps)(App);
