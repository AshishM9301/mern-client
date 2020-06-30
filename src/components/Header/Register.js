import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { reduxForm, Field } from 'redux-form';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { register } from '../../actions';
import { clearError } from '../../actions/errorAction';

export class Register extends Component {
  state = {
    page: false,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    repassword: '',
    msg: null,
  };

  componentDidUpdate(pervProps) {
    const { error, success } = this.props;
    if (error !== pervProps.error) {
      // Check for register error
      if (error.id === 'REGISTER_FAIL') {
        this.setState({ msg: error.errorMessage });
      } else {
        this.setState({ msg: null });
      }
    }
    //If Authenticated

    if (success) {
      this.props.history.push('/');

      this.successMessage();
    }
  }

  successMessage = () => {
    this.setState({ msg: `${this.state.firstName} is Registered` });
  };

  toggle = () => {
    // Clear Error
    this.props.clearError();

    this.setState({ page: !this.state.page });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  /* renderInput = ({ label, input, type, className }) => {
    return (
      <div className={className}>
        <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold m-2'>
          {label}
        </label>
        <input
          {...input}
          type={type}
          className='shadow appearance-none border rounded w-full py-2 px-3 mb-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        />
      </div>
    );
  };
*/
  onSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, email, password, repassword } = this.state;

    const newUser = {
      firstName,
      lastName,
      email,
      password,
      repassword,
    };

    this.props.register(newUser);
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
          className='w-full max-w-lg mx-auto flex items-center'
          style={{ height: '100vmin' }}>
          <form
            className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
            onSubmit={this.onSubmit}>
            <div className='flex flex-wrap -mx-3 mb-4'>
              <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold m-2'>
                  Enter Firstname
                </label>
                <input
                  name='firstName'
                  type='text'
                  className='shadow appearance-none border rounded w-full py-2 px-3 mb-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  //className='w-full md:w-1/2 px-3 mb-6 md:mb-0'
                  onChange={this.onChange}
                />
              </div>
              <div className='w-full md:w-1/2 px-3'>
                <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold m-2'>
                  Enter LastName
                </label>
                <input
                  name='lastName'
                  type='text'
                  // className='w-full md:w-1/2 px-3'
                  className='shadow appearance-none border rounded w-full py-2 px-3 mb-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  onChange={this.onChange}
                />
              </div>
            </div>
            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold m-2'>
              Enter mail
            </label>
            <input
              name='email'
              type='email'
              className='shadow appearance-none border rounded w-full py-2 px-3 mb-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              onChange={this.onChange}
            />
            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold m-2'>
              Enter Password
            </label>
            <input
              name='password'
              type='password'
              label=''
              className='shadow appearance-none border rounded w-full py-2 px-3 mb-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              onChange={this.onChange}
            />
            <p className='text-gray-600 text-xs italic'>Atleast 6 character</p>
            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold m-2'>
              Re-Enter Password
            </label>
            <input
              name='repassword'
              className='shadow appearance-none border rounded w-full py-2 px-3 mb-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              type='password'
              onChange={this.onChange}
            />
            <div className='flex justify-end'>
              <Link
                to='/login'
                className='mr-3 mt-3 bg-green-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>
                Already Registerd ?
              </Link>
              <button className='mr-3 mt-3 bg-green-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>
                Register
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
  register: PropTypes.func.isRequired,
  clearError: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  message: state.msg,
  error: state.error,
  success: state.auth.success,
});

// const mapDispatchToProps = {}

// export const RegisterForm = reduxForm({ form: 'registerForm' })(Register);

export default connect(mapStateToProps, { register, clearError })(
  withRouter(Register)
);
