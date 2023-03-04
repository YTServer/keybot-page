import React from "react";
import keyBot from "./assets/key.png";
import { Card } from "./Card";

export class HomePage extends React.Component {
  render() {
    return (
      <div id="home">
        <div className="container mx-auto mt-28 flex max-w-7xl items-center justify-between p-6 lg:px-8">
          <div className="basis-1/3">
            <img className="min-w-full aspect-square" src={keyBot}></img>
          </div>
          <div className="basis-2/3 pl-40 text-left text-white">
            <p className="text-4xl">Team Fortress 2 Keys </p>
            <p className="pt-10">以最優惠的方式獲取 TF2 鑰匙</p>
            <p className="pb-10">The most favorable way to buy TF2 keys</p>
            <a
              href="steam://friends/add/76561198047686623"
              className="rounded-md bg-lime-300 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              加好友
            </a>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center p-6 lg:px-8 max-w-full">
          <Card names="售價" number="55" unit="NTD" />
          <Card names="庫存" number="100" unit="把" />
          <Card names="已完成交易" number="1000000" unit="筆" />
        </div>
      </div>
    );
  }
}
