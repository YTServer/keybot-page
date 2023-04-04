import React from "react";
import vars from "../variable";
import SubmitIcon from "../assets/submit.svg";
import DefaultAvatar from "../assets/default_avatar.jpg";
export default class BotScript extends React.Component {
  constructor(props) {
    super(props);
    this.setMessageList("help");
  }
  commands = [
    "admin - 顯示管理員 Steam 檔案",
    "balance - 顯示尚未領取的商品數量",
    "buy [數量] - 產生購買 [數量] 的訂單",
    "help - 顯示指令列表",
    "how - 顯示購買流程",
    "orders - 顯示尚未完成的訂單資訊",
    "price - 顯示目前售價",
    "price [數量] - 顯示購買 [數量] 所需的金額",
  ];

  messageList = [];

  setMessageList(commands) {
    if (commands === "help") {
      this.messageList = [];
      this.messageList.push(
        <Message avatar={DefaultAvatar} name="User" message="help" />
      );
      this.messageList.push(
        <Message
          avatar={vars.botAvatar}
          name="√Whitey | TF2 Keys Bot"
          message={`指令列表：
          admin - 顯示管理員的 Steam 檔案
          balance - 顯示尚未領取的 Key 數量
          buy [數量] - 產生購買 [數量] 的訂單
          help - 顯示指令列表
          how - 顯示購買流程
          orders - 顯示尚未完成的訂單資訊
          price - 顯示目前售價
          price [數量] - 顯示購買 [數量] 所需的金額
          `}
        />
      );
    }
  }

  // getResponse(command) {
  //   if (command === "help") {
  //     const
  //     this.setMessageList(this.commands);
  //   }
  // }

  render() {
    return (
      <div id="bot-script" className="h-screen snap-center">
        <div className="container mx-auto mt-28 flex max-w-7xl items-center justify-between p-6 lg:px-8">
          <div className="basis-2/3 pl-40 text-left text-white">
            <p className="text-4xl">Bot 指令</p>
            <ul className="mt-10 flex list-disc flex-col space-y-4">
              {this.commands.map((command, index) => (
                <li key={index}>{command}</li>
              ))}
            </ul>
          </div>
          <div className="flex h-96 w-96 flex-col bg-[#1F2126]">
            <div className="pointer-events-none flex h-12 flex-col-reverse border-b-4 border-[#3A3E46] bg-[#151B25]">
              <div className="flex h-9 w-48 items-center rounded-t bg-[#3A3E46]">
                <img className="mx-2 h-6 w-6" src={vars.botAvatar}></img>
                <div>
                  <p className="text-xs text-[#D2EBB5]">
                    √Whitey | TF2 Keys Bot
                  </p>
                  <p className="text-xs text-[#91C257]">售價：60 | 庫存：100</p>
                </div>
              </div>
            </div>
            <div className="flex-grow">{this.messageList}</div>
            <div className="h-16 border border-black bg-[#22252B] p-1">
              <div className="flex h-full w-full items-center border border-black bg-[#1B1C20] p-0.5">
                <div className="flex-grow self-baseline text-white">help</div>
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
  render() {
    return (
      <div className="mt-2 ml-2 flex  flex-col text-white">
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
