import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

export default class PayProcess extends React.Component {
  tabs = [
    {
      name: '7-11',
      steps: [
        'https://www.newebpay.com/images/qa/new_ibon_1.png',
        'https://www.newebpay.com/images/qa/new_ibon_2.png',
        'https://www.newebpay.com/images/qa/new_ibon_3.png',
        'https://www.newebpay.com/images/qa/new_ibon_4.png',
      ],
    },
    {
      name: '全家',
      steps: [
        'https://www.newebpay.com/images/qa/fami01a.png',
        'https://www.newebpay.com/images/qa/fami02a.png',
        'https://www.newebpay.com/images/qa/fami03a.png',
        'https://www.newebpay.com/images/qa/fami04a.png',
      ],
    },
    {
      name: 'OK',
      steps: [
        'https://www.newebpay.com/images/qa/okgo_1a.png',
        'https://www.newebpay.com/images/qa/okgo_2a.png',
        'https://www.newebpay.com/images/qa/okgo_3a.png',
        'https://www.newebpay.com/images/qa/okgo_4a.png',
      ],
    },
    {
      name: '萊爾富',
      steps: [
        'https://www.newebpay.com/images/qa/life_1.png',
        'https://www.newebpay.com/images/qa/life_2.png',
        'https://www.newebpay.com/images/qa/life_3.png',
        'https://www.newebpay.com/images/qa/life_4.png',
      ],
    },
  ];
  selectTab(index) {
    for (let i = 0; i < this.tabs.length; i++) {
      const tab = document.querySelector(`#tab-${i}`);
      const tabContent = document.querySelector(`#tab-content-${i}`);
      if (index === i) {
        tab.classList.add('border-blue-500');
        tab.classList.add('text-blue-500');
        tab.classList.add('border-b-2');
        tabContent.classList.remove('hidden');
      } else {
        tab.classList.remove('border-blue-500');
        tab.classList.remove('text-blue-500');
        tab.classList.remove('border-b-2');
        tabContent.classList.add('hidden');
      }
    }
  }

  componentDidMount() {
    this.selectTab(0);
  }

  render() {
    return (
      <>
        <div className="mb-4 border-b border-gray-700 text-gray-400">
          <ul
            className="-mb-px flex flex-wrap text-center text-sm font-medium"
            id="myTab"
            data-tabs-toggle="#tabContent"
            role="tablist"
          >
            {_.map(this.tabs, (tab, index) => (
              <li className="mr-2" role="presentation" key={index}>
                <button
                  className="inline-block rounded-t-lg p-4 font-bold hover:border-b-2 hover:border-gray-300 hover:text-gray-300"
                  id={`tab-${index}`}
                  data-tabs-target={`#tab-${index}`}
                  type="button"
                  role="tab"
                  aria-controls={`tab-${index}`}
                  aria-selected="true"
                  onClick={() => this.selectTab(index)}
                >
                  {tab.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div id="tabContent">
          {_.map(this.tabs, (tab, index) => (
            <div
              key={index}
              className="hidden rounded-lg bg-gray-800 p-2 md:p-4"
              id={`tab-content-${index}`}
              role="tabpanel"
              aria-labelledby={`tab-${index}`}
            >
              <Gallery key={index} images={tab.steps} />
            </div>
          ))}
        </div>
      </>
    );
  }
}

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: 0,
    };
  }

  render() {
    const { images } = this.props;
    const { currentImage } = this.state;
    return (
      <div className="flex flex-row items-center justify-center gap-1">
        <button
          className="rounded-full bg-gray-700 font-bold text-white hover:bg-gray-600 disabled:pointer-events-none disabled:opacity-50"
          disabled={currentImage === 0}
          onClick={() =>
            this.setState({
              currentImage: currentImage === 0 ? 0 : currentImage - 1,
            })
          }
        >
          <svg
            data-accordion-icon
            className="h-10 w-10 shrink-0 rotate-90"
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
        <div className="flex flex-col items-center">
          <img
            className="max-w-full rounded-lg shadow-lg"
            src={images[currentImage]}
            alt="step"
          />
        </div>
        <button
          className="rounded-full bg-gray-700 font-bold text-white hover:bg-gray-600 disabled:pointer-events-none disabled:opacity-50"
          disabled={currentImage === images.length - 1}
          onClick={() =>
            this.setState({
              currentImage:
                currentImage === images.length - 1
                  ? images.length - 1
                  : currentImage + 1,
            })
          }
        >
          <svg
            data-accordion-icon
            className="h-10 w-10 shrink-0 -rotate-90"
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
      </div>
    );
  }
}

Gallery.propTypes = {
  images: PropTypes.array.isRequired,
};
