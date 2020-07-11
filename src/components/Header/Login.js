import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { signIn } from '../../actions';
import { clearError } from '../../actions/errorAction';

export class Login extends Component {
  state = {
    page: false,
    email: '',
    password: '',
    msg: null,
  };

  componentDidUpdate(pervProps) {
    const { error, success, user } = this.props;
    if (error !== pervProps.error) {
      // Check for register error
      if (error.id === 'LOGIN_FAIL') {
        this.setState({ msg: error.errorMessage });
      } else {
        this.setState({ msg: null });
      }
    }
    //If Authenticated

    if (success) {
      this.props.history.push(`/dashboard`);
    }
  }

  toggle = () => {
    // Clear Error
    this.props.clearError();

    this.setState({ page: !this.state.page });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    const loginUser = {
      email,
      password,
    };
    this.props.signIn(loginUser);
  };

  render() {
    return (
      <div className='bg-green-200'>
        {this.state.msg ? (
          <div className='flex justify-end'>
            <div className='w-1/3 px-4  py-2'>
              <div
                className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative'
                role='alert'>
                <strong className='font-bold'>Error ! </strong>
                <span className='block sm:inline'>{this.state.msg}</span>
                <span className='absolute top-0 bottom-0 right-0 px-4 py-3'>
                  <svg
                    className='fill-current h-6 w-6 text-red-500'
                    role='button'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    onClick={this.toggle}>
                    <title>Close</title>
                    <path d='M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z' />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        ) : null}
        <div
          className='w-full mx-auto flex items-center justify-center'
          style={{ height: '100vmin' }}>
          <form
            className=' w-1/3 bg-white shadow-md rounded px-10 pt-6 pb-8 mb-4'
            onSubmit={this.onSubmit}>
            <div className='mb-5'>
              <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold m-4 ml-2'>
                Enter mail
              </label>
              <input
                name='email'
                type='email'
                className='shadow appearance-none border rounded w-full py-2 px-6 mb-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                onChange={this.onChange}
              />
            </div>
            <div className='mb-7'>
              <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold m-4 ml-2'>
                Enter Password
              </label>
              <input
                name='password'
                type='password'
                label=''
                className='shadow appearance-none border rounded w-full py-2 px-6 mb-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                onChange={this.onChange}
              />
            </div>
            <div className='flex items-center justify-end mt-5'>
              <Link
                to='/register'
                className='mr-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>
                Register
              </Link>
              <button className='mr-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const propTypes = {
  success: PropTypes.bool,
  error: PropTypes.object.isRequired,
  signIn: PropTypes.func.isRequired,
  clearError: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  message: state.msg,
  error: state.error,
  success: state.auth.success,
});

// const mapDispatchToProps = {}

// export const RegisterForm = reduxForm({ form: 'registerForm' })(Register);

export default connect(mapStateToProps, { signIn, clearError })(
  withRouter(Login)
);
