import React from 'react';
import PropTypes from 'prop-types';
import loading from '../assets/tf2.png';
import { DiscountPrice } from './DiscountPrice';

export class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const spinner = (
      <div className="animate-spin sm:w-6 lg:w-12">
        <img src={loading} alt="loading icon" />
      </div>
    );
    const discount = (
      <DiscountPrice 
        number={this.props.number}
        originalPrice={this.props.originalPrice || 0}
      ></DiscountPrice>
    );
    const price = (this.props.originalPrice) ? discount : this.props.number;
    return (
      <div className="w-full p-2">
        <div className="rounded-2xl bg-slate-700 py-4 text-center ring-1 ring-inset ring-gray-900/5">
          <div className="flex flex-col items-center justify-center">
            <h4 className="mb-2 text-3xl font-extrabold text-white">
              {this.props.loading ? spinner : price}
            </h4>
            <p className="text-gray-400">{this.props?.names}</p>
          </div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  names: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
  originalPrice: PropTypes.number,
};
