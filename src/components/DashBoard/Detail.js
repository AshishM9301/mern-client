import React from 'react';
import { Link } from 'react-router-dom';

const stateNames = [
  { key: 1, value: 'Andhra Pradesh' },
  { key: 2, value: 'Arunachal Pradesh' },
  { key: 3, value: 'Assam' },
  { key: 4, value: 'Bihar' },
  { key: 5, value: 'Chhattisgarh' },
  { key: 6, value: 'Goa' },
  { key: 7, value: 'Gujarat' },
  { key: 8, value: 'Haryana' },
  { key: 9, value: 'Himachal Pradesh' },
  { key: 10, value: 'Jharkhand' },
  { key: 11, value: 'Karnataka' },
  { key: 12, value: 'Kerala' },
  { key: 13, value: 'Madhya Pradesh' },
  { key: 14, value: 'Maharashtra' },
  { key: 15, value: 'Manipur' },
  { key: 16, value: 'Meghalaya' },
  { key: 17, value: 'Mizoram' },
  { key: 18, value: 'Nagaland' },
  { key: 19, value: 'Odisha' },
  { key: 20, value: 'Punjab' },
  { key: 21, value: 'Rajasthan' },
  { key: 22, value: 'Sikkim' },
  { key: 23, value: 'Tamil Nadu' },
  { key: 24, value: 'Telangana' },
  { key: 25, value: 'Tripura' },
  { key: 26, value: 'Uttar Pradesh' },
  { key: 27, value: 'Uttarakhand' },
  { key: 28, value: 'West Bengal' },
];

export default function Detail() {
  return (
    <div>
      <div className='w-3/4 mx-auto'>
        <h1 className='text-2xl text-center border-4 border-blue-500 py-3 border-double mt-5 mb-10'>
          Details
        </h1>
      </div>
      <form className='conatiner mx-auto w-full max-w-lg'>
        <div className='flex flex-wrap -mx-3'>
          <div className='w-full px-3 mb-10'>
            <div className='md:flex md:items-center'>
              <div className='md:w-1/5'>
                <label
                  className='block tracking-wide text-gray-700 text-xs font-bold mb-1 md:mb-0 pr-4 uppercase'
                  htmlFor='inline-full-name'>
                  First Name
                </label>
              </div>
              <div className='md:w-4/5'>
                <input
                  className='appearance-none w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                  id='inline-full-name'
                  type='text'
                  placeholder='Jane'
                />
              </div>
            </div>
          </div>
          <div className='w-full px-3 mb-10'>
            <div className='md:flex md:items-center'>
              <div className='md:w-1/5'>
                <label
                  className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                  htmlFor='grid-last-name'>
                  Last Name
                </label>
              </div>
              <div className='md:w-4/5'>
                <input
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                  id='grid-last-name'
                  type='text'
                  placeholder='Doe'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-wrap -mx-3 mb-10 '>
          <div className='w-full px-3'>
            <div className='md:flex md:items-center'>
              <div className='md:w-1/5'>
                <label
                  className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                  htmlFor='grid-user-name'>
                  UserName
                </label>
              </div>
              <div className='md:w-4/5'>
                <input
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                  id='grid-user-name'
                  type='text'
                  placeholder='Username'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-wrap -mx-3 mb-10'>
          <div className='w-full px-3'>
            <div className='md:flex md:items-center'>
              <div className='md:w-1/5'>
                <label
                  className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                  htmlFor='grid-email'>
                  Email
                </label>
              </div>
              <div className='md:w-4/5'>
                <input
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                  id='grid-email'
                  type='email'
                  placeholder='mail@gmail.com'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-wrap -mx-3 mb-10'>
          <div className='w-full px-3'>
            <div className='md:flex md:items-center'>
              <div className='md:w-1/5'>
                <label
                  className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                  htmlFor='grid-password'>
                  Change Password
                </label>
              </div>
              <div className='md:w-4/5'>
                <input
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                  id='grid-password'
                  type='password'
                  placeholder='******************'
                />
              </div>
            </div>

            <p className='text-gray-600 text-xs italic mb-10'>
              Make it as long and as crazy as you'd like
            </p>
            <div className='flex flex-wrap -mx-3 mb-10'>
              <div className='w-full px-3'>
                <div className='md:flex md:items-center'>
                  <div className='md:w-1/5'>
                    <label
                      className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                      htmlFor='grid-password'>
                      Re-enter Password
                    </label>
                  </div>
                  <div className='md:w-4/5'>
                    <input
                      className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                      id='grid-password'
                      type='password'
                      placeholder='******************'
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-wrap -mx-3 mb-10'>
              <div className='w-full px-3'>
                <div className='md:flex md:items-center'>
                  <div className='md:w-1/5'>
                    <label
                      className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                      htmlFor='grid-password'>
                      Phone No. / Mobile No.
                    </label>
                  </div>
                  <div className='md:w-4/5'>
                    <input
                      className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                      id='grid-password'
                      type='password'
                      placeholder='******************'
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-wrap -mx-3 mb-10'>
              <div className='w-full px-3'>
                <div className='md:flex md:items-center'>
                  <div className='md:w-1/5'>
                    <label
                      className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                      htmlFor='grid-password'>
                      whatsapp No.
                    </label>
                  </div>
                  <div className='md:w-4/5'>
                    <input
                      className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                      id='grid-password'
                      type='password'
                      placeholder='******************'
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className='flex flex-wrap -mx-3 mb-10'>
              <div className='w-full px-3 mb-10'>
                <div className='md:flex md:items-center'>
                  <div className='md:w-1/5'>
                    <label
                      className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                      htmlFor='grid-city'>
                      City
                    </label>
                  </div>
                  <div className='md:w-4/5'>
                    <input
                      className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                      id='grid-city'
                      type='text'
                      placeholder='Albuquerque'
                    />
                  </div>
                </div>
              </div>
              <div className='w-full px-3 mb-10'>
                <div className='md:flex md:items-center'>
                  <div className='md:w-1/5'>
                    <label
                      className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                      htmlFor='grid-state'>
                      State
                    </label>
                  </div>
                  <div className='md:w-4/5'>
                    <div className='relative'>
                      <select
                        className='block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                        id='grid-state'>
                        {stateNames.map((sname) => (
                          <option key={sname.key} value={sname.key}>
                            {sname.value}
                          </option>
                        ))}
                      </select>
                      <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                        <svg
                          className='fill-current h-4 w-4'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 20 20'>
                          <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='w-full px-3 mb-10'>
                <div className='md:flex md:items-center'>
                  <div className='md:w-1/5'>
                    <label
                      className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                      htmlFor='grid-zip'>
                      Zip
                    </label>
                  </div>
                  <div className='md:w-4/5'>
                    <input
                      className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                      id='grid-zip'
                      type='text'
                      placeholder={90210}
                    />
                  </div>
                </div>
              </div>
              <div className='flex justify-end w-full'>
                <Link
                  to='/payment'
                  className='bg-white hover:bg-blue-400 hover:text-white text-gray-800 font-semibold text-lg py-2 px-10 border border-gray-400 rounded shadow'>
                  Next
                </Link>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
