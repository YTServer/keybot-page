import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import PayProcess from './PayProcess';

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
      question: '你是誰？我會不會付錢給你卻沒有收到 Keys？',
      open: false,
      answer: (
        <p className="text-gray-400">
          {'自 2012 年起，我一直在經營'}
          <a
            className="text-white underline"
            href="https://steamcommunity.com/groups/Whitey_Server"
          >
            【TW】√Whitey | 交易☆BBall★掛機☆DBall
          </a>
          {
            ' 伺服器，目前是台灣歷史最悠久的社群伺服器。在過去的幾年中，我已經完成了超過 500 筆鑰匙訂單，交易總數超過 10000 Keys，從未發生任何交易糾紛。因此，您可以放心購買並且我們會確保您順利地收到您所購買的 Keys。'
          }
        </p>
      ),
    },
    {
      question: '為什麼要跟你買？',
      open: false,
      answer: (
        <p className="text-gray-400">
          {
            '我們提供的 TF2 Keys 除了價格比 Steam 市集和曼恩商店更優惠之外，還不會受到 Steam 交易限制，您可以立即與其他玩家進行交易購買心儀的帽子、嘲諷、異常帽。此外，我們還提供超商繳費的服務，方便那些沒有信用卡的玩家購買。'
          }
        </p>
      ),
    },
    {
      question: '為什麼 Bot 不會回應我？',
      open: false,
      answer: (
        <p className="text-gray-400">
          {
            '在使用 Bot 之前，先確認它的遊戲狀態是否顯示售價及庫存。如果 Bot 的狀態顯示正常，但您仍未收到回應，請通知管理員以便處理。'
          }
        </p>
      ),
    },
    {
      question: '我要怎麼印繳費單？',
      open: false,
      answer: (
        <>
          <p className="mb-2 text-gray-400">
            請選擇您欲前往的超商，並依照圖片上的步驟進行操作即可。
          </p>
          <PayProcess />
        </>
      ),
    },
    {
      question: '有其他付款方式嗎？例如：轉帳、Mycard 或是用遊戲物品交易',
      open: false,
      answer: (
        <p className="text-gray-400">
          目前只接受超商繳費。{' '}
          <span className="bg-black text-black hover:text-white">
            轉帳功能被金流公司扼殺了
          </span>
        </p>
      ),
    },
    {
      question: '為什麼我買完沒有辦法使用贊助者指令？',
      open: false,
      answer: (
        <p className="text-gray-400">
          贊助者身分是由我手動加入的，因此無法立即獲得資格。如果您已經繳費但仍未獲得贊助者身分，請耐心等待一段時間，如果長時間未獲得身分，請聯繫管理員以協助您解決問題。
        </p>
      ),
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
