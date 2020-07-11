import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className='items-end content-end self-end'>
      <div className='bg-blue-500 text-gray-200 p-4'>
        <div className='grid grid-cols-5 gap-4'>
          <div className='col-span-1 flex justify-center'>
            <ul>
              <li className='py-2'>
                <Link to='endev.codes'>Main page</Link>
              </li>
              <li className='py-2'>
                <Link to='/login'>Teach </Link>
              </li>
              <li className='py-2'>
                <Link to='/'>About us</Link>
              </li>
            </ul>
          </div>
          <div className='col-span-1 flex justify-center'>
            <ul>
              <li className='py-2'>
                <Link to='/'>Contact us</Link>
              </li>
              <li className='py-2'>
                <Link to='/login'>Careers </Link>
              </li>

              <li className='py-2'>
                <Link to='/'>Help and Support</Link>
              </li>
            </ul>
          </div>
          <div className='col-span-1 flex justify-center'>
            <ul>
              <li className='py-2'>
                <Link to='/'>Affilate</Link>
              </li>
              <li className='py-2'>
                <Link to='/login'>Sitemap </Link>
              </li>

              <li className='py-2'>
                <Link to='/'>Featired Courses</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
