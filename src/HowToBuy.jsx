import React from "react";

export class HowToBuy extends React.Component {
  render() {
    return (
      <div id="how-to-buy">
        <div className="container mx-auto mt-28 flex max-w-7xl p-6 lg:px-8">
          <div className="pl-40 text-left text-white">
            <p className="text-4xl">How To Buy</p>
            <ol className="flex list-decimal flex-col space-y-4 pt-10 pl-10">
              <li>
                先加
                <a
                  href="steam://friends/add/76561198047686623"
                  className="m-4 rounded-md bg-lime-500 px-1 py-1 text-sm font-semibold text-gray-900 shadow-sm hover:bg-lime-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  √Whitey | TF2 Keys Bot{" "}
                </a>
                好友 輸入 buy
              </li>
              <li>
                指令產生新訂單，例如：輸入 buy 10，會產生一筆 10 keys 的訂單
              </li>
              <li>確認訂單數量、金額正確後到超商繳費</li>
              <li>完成繳費後，傳送交易提案給 Bot 取貨</li>
            </ol>
          </div>
        </div>
      </div>
    );
  }
}
