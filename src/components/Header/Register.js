import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';

import { register } from '../../actions';

export class Register extends Component {
  renderInput = ({ label, input, type, className }) => {
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

  onSubmit(formValues) {
    const newUser = formValues;
    console.log(newUser);

    register(newUser);
  }

  render() {
    return (
      <div className='bg-green-200'>
        <div
          className='w-full max-w-lg mx-auto flex items-center'
          style={{ height: '100vmin' }}>
          <form
            className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
            onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <div className='flex flex-wrap -mx-3 mb-4'>
              <Field
                name='firstname'
                type='text'
                label='Enter FirstName'
                className='w-full md:w-1/2 px-3 mb-6 md:mb-0'
                component={this.renderInput}
              />
              <Field
                name='lastname'
                type='text'
                label='Enter LastName'
                className='w-full md:w-1/2 px-3'
                component={this.renderInput}
              />
            </div>
            <Field
              name='email'
              type='email'
              label='Enter mail'
              component={this.renderInput}
            />
            <Field
              name='password'
              type='password'
              label='Enter Password'
              component={this.renderInput}
            />
            <p class='text-gray-600 text-xs italic'>Atleast 6 character</p>
            <Field
              name='re-enter password'
              type='password'
              label='Re-Enter Password'
              component={this.renderInput}
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

//const mapStateToProps = (state) => {  isRegistered: this.state.isRegistered;};

// const mapDispatchToProps = {}

export const RegisterForm = reduxForm({ form: 'registerForm' })(Register);

export default connect(null, { register })(RegisterForm);
