import React from "react";

export class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="-mt-2 w-1/3 p-2 lg:mt-0 lg:w-full lg:max-w-md">
        <div className="rounded-2xl bg-sky-900 py-4 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
          <div className="mx-auto max-w-xs sm:px-4 lg:px-8">
            <p className="text-base font-semibold text-white">
              {this.props?.names}
            </p>
            <p className="mt-6 flex items-baseline justify-center gap-x-2">
              <span className="font-bold tracking-tight text-lime-300 sm:text-xl lg:text-5xl">
                {this.props?.number}
              </span>
              <span className="font-semibold leading-6 tracking-wide text-lime-300 sm:text-xs lg:text-sm">
                {this.props?.unit}
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
