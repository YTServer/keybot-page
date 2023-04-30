import React from 'react';
import PropTypes from 'prop-types';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import vars from '../variable';
import { connect } from 'react-redux';
import { selectUser } from '../models/userReducer';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileMenuOpen: false,
    };
    const loginUrl =
      'https://steamcommunity.com/openid/login?openid.ns=http://specs.openid.net/auth/2.0&openid.identity=http://specs.openid.net/auth/2.0/identifier_select&openid.claimed_id=http://specs.openid.net/auth/2.0/identifier_select&openid.mode=checkid_setup&openid.return_to=https://api.whitey.me/auth';
    this.encodedUrl = encodeURI(loginUrl);
  }

  navigation = [
    { name: '購買流程', id: 'buy' },
    { name: '指令列表', id: 'script' },
    { name: '購買須知', id: 'notice' },
    { name: '常見問題', id: 'faq' },
    { name: '聯絡我們', id: 'about' },
  ];
  navigationItem = this.navigation.map((item) => {
    return (
      <a
        key={item.id}
        className="cursor-pointer text-sm font-semibold leading-6 text-white"
        href={'#' + item.id}
      >
        {item.name}
      </a>
    );
  });
  navigationItemMobile = this.navigation.map((item) => {
    return (
      <a
        key={item.id}
        className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-black"
        href={'#' + item.id}
        onClick={() => this.setState({ mobileMenuOpen: false })}
      >
        {item.name}
      </a>
    );
  });

  render() {
    return (
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex flex-wrap lg:flex-1">
          <a href="#home" className="-m-1.5 flex items-center p-1.5">
            <span className="sr-only">{vars.botName}</span>
            <img
              width={32}
              height={32}
              className="h-8 w-auto rounded-full"
              src={vars.botAvatar}
              alt="avatar"
            />

            <p className="ml-2 text-white">{vars.botName}</p>
          </a>
        </div>
        <div className="flex md:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            onClick={() => this.setState({ mobileMenuOpen: true })}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6 " aria-hidden="true" />
          </button>
        </div>
        <div className="hidden md:flex md:gap-x-4 lg:gap-x-12">
          {this.navigationItem}
          <a
            className={this.props.user.logged ? 'hidden' : ''}
            href={this.encodedUrl}
          >
            <img src={vars.steamOpenIdButton}></img>
          </a>
          <p
            className={`text-white ${this.props.user.logged ? '' : 'hidden'}`}
          >{`Hi ${this.props.user.avatarUrl}`}</p>
        </div>
        <Dialog
          as="div"
          className="lg:hidden"
          open={this.state.mobileMenuOpen}
          onClose={() => this.setState({ mobileMenuOpen: false })}
        >
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-slate-800 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <div className="flex flex-wrap lg:flex-1 ">
                <a
                  href="#home"
                  className="-m-1.5 flex items-center p-1.5 lg:flex-1"
                  onClick={() => this.setState({ mobileMenuOpen: false })}
                >
                  <span className="sr-only">{vars.botName}</span>
                  <img
                    className="h-8 w-auto rounded-full"
                    src={vars.botAvatar}
                    alt="avatar"
                  />
                  <p className="ml-2 text-white ">{vars.botName}</p>
                </a>
              </div>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => this.setState({ mobileMenuOpen: false })}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="space-y-2 py-6">{this.navigationItemMobile}</div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </nav>
    );
  }
}

Navbar.propTypes = {
  user: PropTypes.shape({
    avatarUrl: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    logged: PropTypes.bool.isRequired,
  }),
};

const mapStateToProps = (state) => {
  return {
    user: selectUser(state),
  };
};

export default connect(mapStateToProps)(Navbar);
