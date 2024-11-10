import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Card } from './Card';
import { connect } from 'react-redux';
import { selectStatus } from '../models/statusReducer';
import { selectOrder } from '../models/orderReducer';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';

const TradeStatusMap = {
  0: '未付款',
  1: '付款成功',
  2: '付款失敗',
  3: '取消付款',
  6: '退款',
};

const columns = [
  {
    name: '訂單編號',
    selector: (row) => row.OrderStatus.TradeNo,
    sortable: true,
  },
  {
    name: '訂單數量',
    selector: (row) => row.Count,
  },
  {
    name: '單價',
    selector: (row) => row.Price,
    sortable: true,
  },
  {
    name: '訂單金額(含手續費)',
    selector: (row) => row.OrderStatus.Amt,
  },
  {
    name: '繳費代碼',
    selector: (row) => row.OrderStatus.PayInfo,
  },
  {
    name: '繳費期限',
    selector: (row) => row.OrderStatus.ExpireDate,
  },
  {
    name: '訂單狀態',
    selector: (row) => TradeStatusMap[row.OrderStatus.TradeStatus],
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
  constructor(props) {
    super(props);
  }

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
                loading={this.props.order.loading}
                number={this.props.botStatus.not_picked_qty}
              />
              <Card
                names="已取貨數量"
                loading={this.props.order.loading}
                number={this.props.botStatus.picked_qty}
              />
            </div>
            {/* 如果想做到動態分頁查詢 https://react-data-table-component.netlify.app/?path=/docs/ui-library-material-ui-pagination--custom-material-pagination */}
            <DataTable
              columns={columns}
              data={this.props.order.orders}
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
  order: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    orders: PropTypes.arrayOf(
      PropTypes.shape({
        SteamID: PropTypes.string.isRequired,
        Price: PropTypes.number.isRequired,
        Count: PropTypes.number.isRequired,
        OrderStatus: PropTypes.shape({
          TradeNo: PropTypes.string.isRequired,
          PayInfo: PropTypes.string.isRequired,
          PaymentType: PropTypes.string.isRequired,
          TradeStatus: PropTypes.string.isRequired,
          ExpireDate: PropTypes.string.isRequired,
        }),
      })
    ),
  }),
};

const mapStateToProps = (state) => {
  return {
    botStatus: selectStatus(state),
    order: selectOrder(state),
  };
};

export default connect(mapStateToProps)(OrderLookUp);
