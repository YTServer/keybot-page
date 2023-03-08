import React from "react";
import keyBot from "../assets/key.png";
import { Card } from "./Card";

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
  
  componentDidMount() {
    setTimeout(async () => {
      const result = await this.getStat();
      this.setState(result);
    }, 5000);
  }

  getStat() {
    return new Promise((resolve, reject) => {
      resolve({
        price: 60,
        stock: 100,
        orders: 100000,
        loading: true,
      });
    });
  }

  render() {
    return (
      <div id="home" className="h-screen snap-center">
        <div className="container mx-auto mt-28 flex max-w-7xl items-center justify-between p-6 lg:px-8">
          <div className="max-sm:hidden md:basis-1/3">
            <img className="aspect-square min-w-full" src={keyBot}></img>
          </div>
          <div className="text-white md:basis-2/3 lg:pl-40">
            <p className="sm:text-xl md:text-2xl lg:text-4xl ">
              Team Fortress 2 Keys
            </p>
            <p className="pt-10">以最優惠的方式獲取 TF2 鑰匙</p>
            <p className="pb-10">The most favorable way to buy TF2 keys</p>
            <a
              href="steam://friends/add/76561198047686623"
              className="rounded-md bg-lime-500 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-lime-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white max-sm:hidden"
            >
              加好友
            </a>
          </div>
        </div>
        <div className="flex max-w-full flex-row items-center justify-center sm:p-4 lg:p-6 lg:px-8">
          <Card
            names="售價"
            loading={this.state.loading}
            number={this.state.price}
            unit="NTD"
          />
          <Card
            names="庫存"
            loading={this.state.loading}
            number={this.state.stock}
            unit="把"
          />
          <Card
            names="已完成交易"
            loading={this.state.loading}
            number={this.state.orders}
            unit="筆"
          />
        </div>
      </div>
    );
  }
}
