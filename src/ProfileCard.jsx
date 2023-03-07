import React from "react";

export default class ProfileCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md">
        <div className="rounded-2xl bg-sky-900 py-4 ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
          <div className="mx-auto flex max-w-xs justify-end sm:px-4 lg:px-8">
            <img className="w-12" src={this.props.avatar}></img>
            <div className="ml-2">
              <p>{this.props?.name}</p>
              <p>{this.props?.title}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
