import React from 'react';
import PropTypes from 'prop-types';

export class DiscountPrice extends React.Component {
  constructor(props) {
    super(props);
    const t = ((this.props.originalPrice - this.props?.number) / this.props.originalPrice);
    this.state = {
      discountText: t.toFixed(2) * 100,
    };
  }

  render() {
    return (
      <div className="flex items-end max-h-9 gap-2 flex-1 justify-center">
        <h4 className="text-lg bg-[#4c6b22] text-[#BEEE11] md:block hidden">
          -{this.state.discountText}%
        </h4>
        <h4 className="text-3xl">
          ${ this.props?.number }
        </h4>
        <s className="text-xs text-gray-400 md:block hidden">
          ${ this.props.originalPrice }
        </s>
      </div>
    );
  }
}

DiscountPrice.propTypes = {
  number: PropTypes.number.isRequired,
  originalPrice: PropTypes.number.isRequired,
};
