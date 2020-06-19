import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

export class Login extends Component {
  renderInput = ({ label, input, type }) => {
    return (
      <div className='m-5'>
        <label className='mr-3'>{label}</label>
        <input
          {...input}
          type={type}
          placeholder={label}
          className='bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" type="email" placeholder="jane@example.com'
        />
      </div>
    );
  };

  onSubmit(formValues) {
    console.log(formValues);
  }

  render() {
    return (
      <div className='container mx-auto'>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field
            name='email'
            label='Email'
            type='text'
            component={this.renderInput}
          />
          <Field
            name='password'
            label='Password'
            type='password'
            component={this.renderInput}
          />
          <div className='flex justify-end'>
            <Link
              to='/register'
              className=' mr-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>
              Register
            </Link>
            <button className='mr-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const validate = () => {};

//const mapStateToProps = (state) => ({})

export default reduxForm({ form: 'loginForm' })(Login);
