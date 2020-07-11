import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Payment from './Payment';
import Detail from './Detail';
import AllProfile from './AllProfile';
import { Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';

export class DashBoard extends Component {
  render() {
    return (
      <div>
        <div className='container p-4 mx-auto'>
          <div className='grid grid-cols-4 gap-4'>
            <div
              className='col-span-1 flex justify-end pr-4 border-r-2 border-gray-600'
              style={{ height: '100vmin' }}>
              DashBoard
              <AllProfile />
            </div>

            <div className='col-span-3'>
              {this.props.button.id === 'GET_PROFILE' && <Detail />}
              {this.props.button.id === 'GET_PAYMENT' && <Payment />}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const propTypes = {
  button: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  button: state.dashboard,
});

// const mapDispatchToProps = {};

export default connect(mapStateToProps, null)(DashBoard);
