import React from 'react';

export default class BuyProcessCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mx-auto flex max-w-7xl place-items-center justify-between">
        <div className="relative w-1/4 p-5 lg:mt-0">
          <div className="absolute top-0 left-0 right-0 flex items-center justify-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500 text-center">
              1
            </div>
          </div>
          <div className="rounded-2xl bg-sky-900 py-4 ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:py-8">
            <div className="mx-auto  max-w-xs text-white sm:px-4 lg:px-8">
              先加
              <br></br>
              <a
                href="steam://friends/add/76561198047686623"
                className="rounded-md bg-lime-500 px-1 py-1 text-sm font-semibold text-gray-900 shadow-sm hover:bg-lime-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                √Whitey | TF2 Keys Bot{' '}
              </a>
              <br></br>
              好友輸入 buy
            </div>
          </div>
        </div>
        <div className="relative w-1/4 p-5 lg:mt-0">
          <div className="absolute top-0 left-0 right-0 flex items-center justify-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500 text-center">
              2
            </div>
          </div>
          <div className="rounded-2xl bg-sky-900 py-4 ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:py-8">
            <div className="mx-auto  max-w-xs text-white sm:px-4 lg:px-8">
              指令產生新訂單<br></br>例如：輸入 buy 10，會產生一筆 10 keys
              的訂單
            </div>
          </div>
        </div>
        <div className="relative w-1/4 p-5 lg:mt-0">
          <div className="absolute top-0 left-0 right-0 flex items-center justify-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500 text-center">
              3
            </div>
          </div>
          <div className="rounded-2xl bg-sky-900 py-4 ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:py-8">
            <div className="mx-auto  max-w-xs text-white sm:px-4 lg:px-8">
              確認訂單數量、金額正確後到超商繳費
            </div>
          </div>
        </div>
        <div className="relative w-1/4 p-5 lg:mt-0">
          <div className="absolute top-0 left-0 right-0 flex items-center justify-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500 text-center">
              4
            </div>
          </div>
          <div className="rounded-2xl bg-sky-900 py-4 ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:py-8">
            <div className="mx-auto  max-w-xs text-white sm:px-4 lg:px-8">
              完成繳費後，傳送交易提案給 Bot 取貨
            </div>
          </div>
        </div>
      </div>
    );
  }
}
