import React from 'react';
import PropTypes from 'prop-types';

export default class ProfileCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="border-gray-200shadow w-full max-w-sm rounded-lg border border-gray-700 bg-gray-800">
        <div className="flex flex-col items-center pb-10 pt-4">
          <img
            className="mb-3 h-24 w-24 rounded-full shadow-lg"
            src={this.props.avatar}
            alt="avatar"
          />
          <h5 className="mb-1 whitespace-nowrap text-xl font-medium text-white">
            {this.props.name}
          </h5>
          <span className="text-sm text-gray-400">{this.props.title}</span>
          <div className="mt-4 flex space-x-3 md:mt-6">
            <a
              href={this.props.link}
              className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-800"
            >
              {this.props.actionTitle}
            </a>
          </div>
        </div>
      </div>
    );
  }
}

ProfileCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  actionTitle: PropTypes.string.isRequired,
};
