import React from 'react';

export default class Notice extends React.Component {
  render() {
    return (
      <div id="notice">
        <h2 className="text-center text-4xl font-bold text-white">購買須知</h2>
        <section className="mx-auto max-w-screen-xl items-center py-8 px-4 sm:py-16 lg:px-6">
          <ul className="list-inside text-gray-400">
            <li className="border-b border-gray-700 py-5">
              {
                '購買之前請先確認商品庫存，如果繳費後發現商品數量不足，請耐心等候，我會盡快將商品補齊'
              }
            </li>
            <li className="border-b border-gray-700 py-5">
              每筆交易都會含 28 元超商手續費，總共需要支付的金額為
              <span className="font-bold text-gray-300">
                售價 * 訂購數量 + 28 元
              </span>
            </li>
            <li className="border-b border-gray-700 py-5">
              購買前請先確認自己的帳號是否能夠交易
            </li>
            <li className="border-b border-gray-700 py-5">
              訂單繳費期限為 24 小時，請在時限內完成繳費
            </li>
            <li className="border-b border-gray-700 py-5">
              付款完成後恕不接受退貨
            </li>
            <li className="border-b border-gray-700 py-5">
              如果有遇到任何問題，請聯絡管理員
            </li>
          </ul>
        </section>
      </div>
    );
  }
}
