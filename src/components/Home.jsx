import React from 'react';
import PropTypes from 'prop-types';
import keyBot from '../assets/key.png';
import { Card } from './Card';
import { connect } from 'react-redux';
import { selectStatus } from '../models/reducer';
class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="home" className="">
        <section className="mt-28 bg-gray-900">
          <div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl xl:text-6xl">
                Whitey&apos;s TF2 Key Bot
              </h1>
              <p className="mb-6 max-w-2xl font-light text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
                以最優惠的方式獲取 TF2 鑰匙
              </p>
              <a
                href="steam://friends/add/76561198047686623"
                className="mr-2 mb-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-800 max-sm:hidden"
              >
                新增好友
              </a>
              <div className="mt-4 flex max-w-full flex-row items-center justify-center">
                <Card
                  names="售價"
                  loading={this.props.botStatus.loading}
                  number={this.props.botStatus.price}
                />
                <Card
                  names="庫存"
                  loading={this.props.botStatus.loading}
                  number={this.props.botStatus.stock}
                />
                <Card
                  names="成交量"
                  loading={this.props.botStatus.loading}
                  number={this.props.botStatus.orders}
                />
              </div>
            </div>
            <div className="hidden lg:col-span-5 lg:mt-0 lg:flex">
              <img src={keyBot} alt="key" />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

HomePage.propTypes = {
  botStatus: PropTypes.shape({
    price: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
    orders: PropTypes.number.isRequired,
    loading: PropTypes.bool.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => {
  return {
    botStatus: selectStatus(state),
  };
};

export default connect(mapStateToProps)(HomePage);
