import React from 'react';
import _ from 'lodash';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

export default class QA extends React.Component {
  navigation = [
    {
      key: 1,
      question: '為什麼 Bot 不會回應我？',
      answer:
        '使用前先確認 Bot的遊戲狀態是否顯示正在營業，如果顯示營業中卻沒有回應請通知管理員',
    },
    {
      key: 2,
      question: '如何列印繳費單？',
      answer: '請參考以下連結，依照網站中的圖操作即可',
    },
    {
      key: 3,
      question: '有其他付款方式嗎？例如：轉帳、Mycard 或是用遊戲物品交易',
      answer: '目前只接受超商繳費',
    },
    {
      key: 4,
      question: '為什麼我買完沒有辦法使用贊助者指令？',
      answer: '遇到這個問題請向管理員回報',
    },
  ];

  disclosureItem = _.map(this.navigation, (item, index) => {
    return (
      <Disclosure key={index}>
        {({ open }) => (
          <>
            <Disclosure.Button className="my-4 flex w-full justify-between rounded-lg bg-white px-4 py-5 text-left text-3xl font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
              <span>{item.question}</span>
              <ChevronUpIcon
                className={`${
                  open ? 'rotate-180 transform' : ''
                } h-5 w-5 text-purple-500`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 py-2  text-lg text-white">
              {item.answer}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    );
  });
  render() {
    return (
      <div id="qa" className="">
        <div className="w-full px-6 pt-1">
          <div className="p- mx-auto w-full max-w-5xl rounded-2xl bg-slate-800  ">
            {this.disclosureItem}
          </div>
        </div>
      </div>
    );
  }
}
