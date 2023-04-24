import React from 'react';

export default class BuyProcessCard extends React.Component {
  constructor(props) {
    super(props);
  }

  arrowSvg = (
    <svg
      aria-hidden="true"
      className="ml-2 hidden h-4 w-4 sm:ml-4 md:block"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13 5l7 7-7 7M5 5l7 7-7 7"
      ></path>
    </svg>
  );

  steps = [
    {
      title: '新增好友',
      details: '',
    },
    {
      title: '產生訂單',
      details: '使用 buy 指令',
    },
    {
      title: '繳費',
      details: '使用代碼至超商繳費',
    },
    {
      title: '取貨',
      details: '發交易提案給 Bot',
    },
  ];

  render() {
    return (
      <ol className="w-full items-center justify-center space-y-4 sm:flex sm:space-x-8 sm:space-y-0">
        {this.steps.map((step, index) => (
          <li
            className="flex items-center space-x-2.5 text-blue-500"
            key={index}
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-blue-500">
              {index + 1}
            </span>
            <span>
              <h3 className="font-bold leading-tight">{step.title}</h3>
              <p className="text-sm">{step.details}</p>
            </span>
            {index < this.steps.length - 1 ? this.arrowSvg : null}
          </li>
        ))}
      </ol>
    );
  }
}
