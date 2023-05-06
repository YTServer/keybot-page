import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Card } from './Card';
import { connect } from 'react-redux';
import { selectStatus } from '../models/statusReducer';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';

const columns = [
  {
    name: '訂單編號',
    selector: (row) => parseInt(row.order_id),
    sortable: true,
  },
  {
    name: '訂單數量',
    selector: (row) => row.order_qty,
  },
  {
    name: '單價',
    selector: (row) => parseInt(row.order_unit_price),
    sortable: true,
  },
  {
    name: '訂單金額(含28元手續費)',
    selector: (row) => row.order_price,
  },
  {
    name: '繳費代碼',
    selector: (row) => row.order_payment_code,
  },
];
const data = [
  {
    id: 1,
    order_id: '111111',
    order_qty: '10',
    order_unit_price: '10',
    order_price: '128',
    order_payment_code: 'xXXXXXX',
  },
  {
    id: 2,
    order_id: '222222',
    order_qty: '20',
    order_unit_price: '20',
    order_price: '428',
    order_payment_code: 'xXXXASDFSADFXXX',
  },
  {
    id: 3,
    order_id: '333333',
    order_qty: '30',
    order_unit_price: '15',
    order_price: '478',
    order_payment_code: 'aSdFgh1!As',
  },
  {
    id: 4,
    order_id: '444444',
    order_qty: '25',
    order_unit_price: '12',
    order_price: '300',
    order_payment_code: '12XyZ9aBcDe',
  },
  {
    id: 5,
    order_id: '555555',
    order_qty: '40',
    order_unit_price: '10',
    order_price: '428',
    order_payment_code: 'kLmNop5!fG',
  },
  {
    id: 6,
    order_id: '666666',
    order_qty: '50',
    order_unit_price: '8',
    order_price: '428',
    order_payment_code: '3fGhIjKlMn',
  },
  {
    id: 7,
    order_id: '777777',
    order_qty: '60',
    order_unit_price: '6',
    order_price: '388',
    order_payment_code: '9bCdEfGhIp',
  },
  {
    id: 8,
    order_id: '888888',
    order_qty: '70',
    order_unit_price: '5',
    order_price: '378',
    order_payment_code: 'uVwXyZ0!gH',
  },
  {
    id: 9,
    order_id: '999999',
    order_qty: '15',
    order_unit_price: '25',
    order_price: '403',
    order_payment_code: '6hIjKlMaBc',
  },
  {
    id: 10,
    order_id: '10000000',
    order_qty: '15',
    order_unit_price: '55',
    order_price: '853',
    order_payment_code: 'ggeejksadlfa',
  },
  {
    id: 11,
    order_id: '9999999999999',
    order_qty: '15',
    order_unit_price: '55',
    order_price: '853',
    order_payment_code: 'ggeejksadlfa',
  },
];

const paginationComponentOptions = {
  noRowsPerPage: false,
  rowsPerPageText: '顯示筆數',
  rangeSeparatorText: 'of',
  selectAllRowsItem: true,
  selectAllRowsItemText: '全部',
};
// style 參考
// https://github.com/jbetancur/react-data-table-component/blob/master/src/DataTable/styles.ts
const customStyles = {
  headCells: {
    style: {
      fontSize: '14px',
      color: 'white',
      backgroundColor: 'rgb(17 24 39)',
      borderBottomColor: 'white',
    },
  },
  rows: {
    style: {
      fontSize: '14px',
      color: 'white',
      backgroundColor: 'rgb(17 24 39)',
      '&:not(:last-of-type)': {
        borderBottomStyle: 'solid',
        borderBottomWidth: '1px',
        borderBottomColor: 'white',
      },
    },
    highlightOnHoverStyle: {
      //borderRadius: '25px',
      //outline: '1px solid #FFFFFF',
    },
  },
  pagination: {
    style: {
      border: 'none',
      color: 'white',
      backgroundColor: 'rgb(17 24 39)',
    },
    pageButtonsStyle: {
      //borderRadius: '50%',
      //height: '40px',
      //width: '40px',
      //padding: '8px',
      //margin: 'px',
      cursor: 'pointer',
      //transition: '0.4s',
      //color: 'red',
      fill: 'white',
      backgroundColor: 'transparent',
      '&:disabled': {
        //cursor: 'unset',
        //color: 'yellow',
        fill: 'gray',
      },
    },
  },
};

class OrderLookUp extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">
          <svg
            data-accordion-icon
            className="h-20 w-20 shrink-0 rotate-90"
            fill="white"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </Link>
        <div className="flex snap-y snap-mandatory snap-always flex-col  scroll-smooth px-4 md:px-8">
          <section className=" bg-gray-900">
            <h2 className="text-center text-5xl font-bold text-white">
              訂單查詢
            </h2>
            <div className="my-5 flex max-w-full flex-row items-center justify-center">
              <Card
                names="未取貨數量"
                loading={this.props.botStatus.loading}
                number={this.props.botStatus.not_picked_qty}
              />
              <Card
                names="已取貨數量"
                loading={this.props.botStatus.loading}
                number={this.props.botStatus.picked_qty}
              />
            </div>
            {/* 如果想做到動態分頁查詢 https://react-data-table-component.netlify.app/?path=/docs/ui-library-material-ui-pagination--custom-material-pagination */}
            <DataTable
              columns={columns}
              data={data}
              pagination
              paginationComponentOptions={paginationComponentOptions}
              customStyles={customStyles}
              highlightOnHover
            />
          </section>
        </div>
      </div>
    );
  }
}

OrderLookUp.propTypes = {
  botStatus: PropTypes.shape({
    not_picked_qty: PropTypes.number.isRequired,
    picked_qty: PropTypes.number.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => {
  return {
    botStatus: selectStatus(state),
  };
};

export default connect(mapStateToProps)(OrderLookUp);
