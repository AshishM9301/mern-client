import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='border-b border-blue-400'>
      <div className='flex p-4 justify-between container mx-auto'>
        <Link to='/' className='mr-3'>
          <h4 className='font-semibold text-xl'>Site Name</h4>
        </Link>
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
          <Link
            to='/login'
            className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
            Log Out
          </Link>
        </div>
      </div>
    </div>
  );
}
