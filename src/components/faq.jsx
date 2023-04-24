import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

export default class QA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accordionItems: _.map(this.navigation, (item, index) => {
        return (
          <Accordion
            key={index}
            index={index}
            question={item.question}
            answer={item.answer}
            open={false}
            updateState={(k) => this.updateAccordionState(k)}
          ></Accordion>
        );
      }),
    };
  }

  navigation = [
    {
      question: '為什麼 Bot 不會回應我？',
      open: false,
      answer: (
        <p className="text-gray-400">
          {
            '使用前先確認 Bot 的遊戲狀態是否顯示正在營業，如果顯示營業中卻沒有回應請通知管理員'
          }
        </p>
      ),
    },
    {
      question: '如何列印繳費單？',
      open: false,
      answer: (
        <>
          <p className="mb-2 text-gray-400">
            請參考以下連結，依照網站中的圖操作即可
          </p>
          <ul className="flex list-inside list-disc flex-col space-y-4 text-left text-white underline">
            <li>
              <a href="https://www.newebpay.com/info/site_description/seven_ibon_embedded">
                7-11
              </a>
            </li>

            <li>
              <a href="https://www.newebpay.com/info/site_description/family_embedded">
                全家
              </a>
            </li>
            <li>
              <a href="https://www.newebpay.com/info/site_description/okshop_embedded">
                OK
              </a>
            </li>
            <li>
              <a href="https://www.newebpay.com/info/site_description/hilife_embedded">
                萊爾富
              </a>
            </li>
          </ul>
        </>
      ),
    },
    {
      question: '有其他付款方式嗎？例如：轉帳、Mycard 或是用遊戲物品交易',
      open: false,
      answer: <p className="text-gray-400">目前只接受超商繳費</p>,
    },
    {
      question: '為什麼我買完沒有辦法使用贊助者指令？',
      open: false,
      answer: <p className="text-gray-400">遇到這個問題請向管理員回報</p>,
    },
  ];

  updateAccordionState(key = -1) {
    _.forEach(this.navigation, (item, index) => {
      if (index === key) {
        item.open = !item.open;
      } else {
        item.open = false;
      }
    });

    const accordionItems = _.map(this.navigation, (item, index) => {
      return (
        <Accordion
          key={index}
          index={index}
          question={item.question}
          answer={item.answer}
          open={item.open}
          updateState={(k) => this.updateAccordionState(k)}
        ></Accordion>
      );
    });

    this.setState({
      accordionItems,
    });
  }

  render() {
    return (
      <div id="faq">
        <h2 className="text-center text-4xl font-bold text-white">常見問題</h2>
        <section className="mx-auto max-w-screen-xl items-center py-8 px-4 sm:py-16 lg:px-6">
          {this.state.accordionItems}
        </section>
      </div>
    );
  }
}

class Accordion extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>
          <button
            type="button"
            className={`flex w-full items-center justify-between border-b border-gray-700 py-5 text-left font-bold ${
              this.props.open ? 'text-white' : 'text-gray-400'
            }`}
            aria-expanded="true"
            onClick={() => this.props.updateState(this.props.index)}
          >
            <span>{this.props.question}</span>
            <svg
              data-accordion-icon
              className={`h-6 w-6 shrink-0 ${
                this.props.open ? 'rotate-180' : ''
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </h2>
        <div className={this.props.open ? '' : 'hidden'}>
          <div className="border-b border-gray-700 py-5">
            {this.props.answer}
          </div>
        </div>
      </div>
    );
  }
}

Accordion.propTypes = {
  index: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  answer: PropTypes.node.isRequired,
  open: PropTypes.bool.isRequired,
  updateState: PropTypes.func.isRequired,
};
