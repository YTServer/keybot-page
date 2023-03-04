import React from "react";

export class QA extends React.Component {
  render() {
    return (
      <div id="qa">
        <div className="container mx-auto mt-28 flex max-w-7xl items-center justify-between p-6 lg:px-8">
          <div className="basis-2/3 pl-40 text-left text-white">
            <p className="text-4xl">Q&A</p>

            <p className="pt-10">Q: 為什麼 Bot 不會回應我？</p>
            <p>
              A: 使用前先確認 Bot
              的遊戲狀態是否顯示正在營業，如果顯示營業中卻沒有回應請通知管理員
            </p>

            <p className="pt-10">Q: 如何列印繳費單？</p>
            <p>A: 請參考以下連結，依照網站中的圖操作即可</p>

            <p className="pt-10">
              Q: 有其他付款方式嗎？例如：轉帳、Mycard 或是用遊戲物品交易
            </p>
            <p>A: 目前只接受超商繳費</p>

            <p className="pt-10">Q: 為什麼我買完沒有辦法使用贊助者指令？</p>
            <p>A: 遇到這個問題請向管理員回報</p>
          </div>
        </div>
      </div>
    );
  }
}
