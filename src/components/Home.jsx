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
      <div id="home">
        <section className="mt-28 bg-gray-900">
          <div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="mb-4 max-w-2xl text-3xl font-extrabold leading-none tracking-tight text-white md:text-5xl xl:text-6xl">
                Whitey&apos;s TF2 Key Bot
              </h1>
              <p className="mb-6 max-w-2xl font-light text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
                購買 TF2 鑰匙，即可立即取貨！
                <br></br>
                我們的價格比市集及曼恩商店更便宜且不受限制交易，讓你除了省錢外還能馬上使用它們去交易自己心儀的各種裝飾品、嘲諷、異常帽。
              </p>
              <a
                href="steam://friends/add/76561198047686623"
                className="mr-2 mb-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-800 max-sm:hidden"
              >
                開始購買
              </a>
              <div className="mt-4 flex max-w-full flex-row items-center justify-center">
                <Card
                  names="售價"
                  loading={this.props.botStatus.loading}
                  number={this.props.botStatus.price}
                  originalPrice={this.props.botStatus.marketPrice / 100}
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
              <p className="text-xs text-gray-500">
                ＊ 售價與庫存以 Steam 狀態顯示為主
              </p>
              <p className="text-xs text-gray-500 hidden md:block">
                ＊ 折扣幅度以 Steam 市集售價計算
              </p>
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
