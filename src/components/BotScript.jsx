import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import vars from '../variable';
import SubmitIcon from '../assets/submit.svg';
import DefaultAvatar from '../assets/default_avatar.jpg';
import Typed from 'react-typed';

export default class BotScript extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messageList: [],
    };
  }
  commands = [
    { name: 'admin', text: 'admin - 顯示管理員 Steam 檔案' },
    { name: 'balance', text: 'balance - 顯示尚未領取的商品數量' },
    {
      name: 'buy',
      text: 'buy [數量] - 產生購買 [數量] 的訂單',
      demo: 'buy 10',
    },
    { name: 'help', text: 'help - 顯示指令列表' },
    { name: 'how', text: 'how - 顯示購買流程' },
    { name: 'orders', text: 'orders - 顯示尚未完成的訂單資訊' },
    { name: 'price', text: 'price - 顯示目前售價' },
    {
      name: 'priceArg',
      display: 'price',
      demo: 'price 10',
      text: 'price [數量] - 顯示購買 [數量] 所需的金額',
    },
  ];

  commandResponse = {
    admin: 'https://steamcommunity.com/id/Whitey_-/',
    balance: '你還有 ${balance} Key 尚未領取',
    buy: `訂單編號：20200110000000
    訂單數量：10
    單價：70
    訂單金額：728 (含28元手續費)
    繳費代碼：TEST1234567890`,
    help: `指令列表：
          admin - 顯示管理員的 Steam 檔案
          balance - 顯示尚未領取的 Key 數量
          buy [數量] - 產生購買 [數量] 的訂單
          help - 顯示指令列表
          how - 顯示購買流程
          orders - 顯示尚未完成的訂單資訊
          price - 顯示目前售價
          price [數量] - 顯示購買 [數量] 所需的金額
          `,
    how: `購買流程：
    1. 輸入 buy 指令產生新訂單
    2. 確認訂單數量、金額正確即可繳費
    3. 完成繳費後，發送交易提案取貨

    注意事項：
    ※ 購買之前請先確認商品庫存，如果繳費後才發現商品數量不足，請耐心等候，我會盡快將商品補齊
    ※ 訂單繳費期限為 24 小時，請在時限內完成繳費
    ※ 購買前請先確定自己的帳號是否能夠交易
    ※ 如果交易遭到託管，請勿中途取消
    ※ 如果有任何問題歡迎加管理員好友詢問`,

    orders: `尚未完成的訂單數量：1

    訂單編號：20200110000000
    訂單數量：10
    單價：70
    訂單金額：728 (含28元手續費)
    繳費代碼：TEST1234567890
    `,
    price: '目前售價為每支 70 元',
    priceArg: `使用超商繳費購買10支所需支付的金額為${
      10 * 70 + 28
    }元(含28元手續費)
    `,
  };

  setMessageList(command) {
    console.log(`demo ${command}`);
    this.messageList = [];
    const c = _.find(this.commands, { name: command });
    const displayCommand = c.demo ?? c.name;
    const response = this.commandResponse[command] ?? 'Unknown command';
    this.messageList.push(
      <Message
        key="req"
        avatar={DefaultAvatar}
        name="User"
        message={displayCommand}
      />
    );
    this.messageList.push(
      <Message
        key="res"
        avatar={vars.botAvatar}
        name={vars.botName}
        message={response}
      />
    );
    this.typed.strings = [displayCommand];
    this.typed.reset();
  }

  render() {
    return (
      <div id="bot-script" className="">
        <div className="flex justify-between">
          <div className="text-left text-white">
            <p className="text-4xl">Bot 指令</p>
            <ul className="mt-10 flex list-disc flex-col space-y-4">
              {this.commands.map((command, index) => {
                if (this.commandResponse[command.name]) {
                  return (
                    <li className="list-inside" key={index}>
                      <a
                        className="cursor-pointer font-bold underline"
                        key={index}
                        onClick={() => this.setMessageList(command.name)}
                      >
                        {command.display ?? command.name}
                      </a>
                      {command.text.split(command.display ?? command.name)[1]}
                    </li>
                  );
                } else {
                  return <li key={index}>{command.text}</li>;
                }
              })}
            </ul>
          </div>
          <div className="flex h-auto min-h-[28rem] w-96 flex-col bg-[#1F2126]">
            <div className="pointer-events-none flex h-12 flex-col-reverse border-b-4 border-[#3A3E46] bg-[#151B25]">
              <div className="flex h-9 w-48 items-center place-self-start rounded-t bg-[#3A3E46]">
                <img className="mx-2 h-6 w-6" src={vars.botAvatar}></img>
                <div>
                  <p className="text-xs text-[#D2EBB5]">{vars.botName}</p>
                  <p className="text-xs text-[#91C257]">售價：60 | 庫存：100</p>
                </div>
              </div>
            </div>
            <div className="flex-grow">{this.state.messageList}</div>
            <div className="h-16 border border-black bg-[#22252B] p-1">
              <div className="flex h-full w-full items-center border border-black bg-[#1B1C20] p-0.5">
                <div className="flex-grow self-baseline text-white">
                  <Typed
                    typedRef={(typed) => {
                      this.typed = typed;
                    }}
                    strings={['']}
                    typeSpeed={40}
                    onComplete={() => {
                      this.setState({ messageList: this.messageList });
                      console.log('complete');
                    }}
                  />
                </div>
                <div className="flex h-11 w-11 items-center justify-center border border-black bg-[#2C3036]">
                  <img className="h-6 w-6 text-white" src={SubmitIcon} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Message extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="my-2 ml-2 flex  flex-col text-white">
        <div className="flex">
          <img src={this.props.avatar} className="h-6 w-6"></img>
          <p className="ml-0.5 text-sm text-[#6a8f40]">{this.props.name}</p>
        </div>
        <p className="ml-7 whitespace-pre-line text-sm text-[#969696]">
          {this.props.message}
        </p>
      </div>
    );
  }
}

Message.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};
