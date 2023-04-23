import React from 'react';
import keyBot from '../assets/key.png';
import { Card } from './Card';
import axios from 'axios';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 55,
      stock: 100,
      orders: 100000,
      loading: true,
    };
  }

  async componentDidMount() {
    const result = await this.getStat();
    this.setState(result);
  }

  async getStat() {
    const res = await axios.get('https://tf.whitey.me/api/v1/bot/status');
    if (res.status === 200) {
      return {
        price: res.data.price,
        stock: res.data.stock,
        orders: res.data.orders,
        loading: false,
      };
    }
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
                  loading={this.state.loading}
                  number={this.state.price}
                />
                <Card
                  names="庫存"
                  loading={this.state.loading}
                  number={this.state.stock}
                />
                <Card
                  names="成交量"
                  loading={this.state.loading}
                  number={this.state.orders}
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
