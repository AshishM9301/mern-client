import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createBrowserHistory } from 'history';

import { logout } from '../../actions';

export const browserHistory = createBrowserHistory();
export class Header extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logout();
  };

  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
  };

  render() {
    const { isAuthenticated } = this.props.auth;

    const loginLinks = (
      <div>
        <Link
          onClick={this.onLogoutClick}
          to='/logout'
          className='mr-3 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
          Log Out
        </Link>
        <Link
          to='/course/upload'
          className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
          Upload
        </Link>
      </div>
    );

    const guestLinks = (
      <div className='lg:mt-0'>
        <Link
          to='/register'
          className='mr-3 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
          Register
        </Link>
        <Link
          to='/login'
          className='mr-3 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
          Login
        </Link>
      </div>
    );
    return (
      <div className='border-b border-blue-400'>
        <div className='flex p-4 justify-between container mx-auto'>
          <Link to='/' className='mr-3'>
            <h4 className='font-semibold text-xl'>Site Name</h4>
          </Link>
          {isAuthenticated ? loginLinks : guestLinks}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Header);
