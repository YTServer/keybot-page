import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchBotStatus } from './models/statusReducer';
import { fetchUser } from './models/userReducer';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import vars from './variable';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import OrderLookUp from './components/OrderLookUp';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBotStatus();
    this.props.fetchUser();
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
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="lookup" element={<OrderLookUp />} />
          </Routes>
          <footer className="m-4 rounded-lg bg-gray-900 shadow">
            <div className="mx-auto w-full max-w-screen-xl p-4 md:py-8">
              <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
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
  fetchUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = { fetchBotStatus, fetchUser };

export default connect(null, mapDispatchToProps)(App);
