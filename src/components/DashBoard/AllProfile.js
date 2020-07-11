import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  clickedPaymentButton,
  clickedProfileButton,
} from '../../actions/dashboardAction';

class AllProfile extends Component {
  componentDidMount() {
    this.props.clickedProfileButton('GET_PROFILE');
  }
  renderProfileButton = () => {
    this.props.clickedProfileButton('GET_PROFILE');
  };

  renderPaymentButton = () => {
    this.props.clickedPaymentButton('GET_PAYMENT');
  };

  render() {
    return (
      <div>
        <button
          onClick={this.renderProfileButton}
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-3'>
          Profile
        </button>
        <button
          onClick={this.renderPaymentButton}
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>
          Payment Details
        </button>
      </div>
    );
  }
}

const propTypes = {
  clickedPaymentButton: PropTypes.func.isRequired,
  clickedProfileButton: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  message: state.msg,
  error: state.error,
  success: state.auth.success,
});
export default connect(null, {
  clickedPaymentButton,
  clickedProfileButton,
})(AllProfile);
