import React from 'react';
import PropTypes from 'prop-types';

export default class ProfileCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="p-2 lg:mt-0">
        <div className="rounded-2xl bg-sky-900 py-4 ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:py-8">
          <div className="mx-auto flex max-w-xs sm:px-4 lg:px-8">
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

ProfileCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
