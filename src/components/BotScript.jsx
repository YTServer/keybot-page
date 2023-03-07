import React from "react";

export default class BotScript extends React.Component {
  render() {
    return (
      <div id="bot-script" className="h-screen snap-center">
        <div className="container mx-auto mt-28 flex max-w-7xl items-center justify-between p-6 lg:px-8">
          <div className="basis-2/3 pl-40 text-left text-white">
            <p className="text-4xl">Bot 指令</p>
            <ul className="mt-10 flex list-disc flex-col space-y-4">
              <li>admin - 顯示管理員 Steam 檔案</li>
              <li>balance - 顯示尚未領取的商品數量</li>
              <li>buy [數量] - 產生購買 [數量] 的訂單</li>
              <li>help - 顯示指令列表</li>
              <li>how - 顯示購買流程</li>
              <li>orders - 顯示尚未完成的訂單資訊</li>
              <li>price - 顯示目前售價</li>
              <li>price [數量] - 顯示購買 [數量] 所需的金額</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
