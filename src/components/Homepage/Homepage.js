import React from 'react';
import '../../css/style.css';

import logowithlaptop from '../../images/logowithlaptop.png';
import board from '../../images/board.png';
import classroom from '../../images/classroom.png';
import bro from '../../images/bro.png';

export default function Homepage() {
  return (
    <div>
      <div className='bg-gray-800'>
        <div className='flex'>
          <div
            style={{ fontFamily: '"Cuprum", sans-serif' }}
            className='mx-auto text-center w-7/12 text-gray-100 text-5xl self-center'>
            <h1>Be a Coding Gen</h1>
            <h1 className='container ml-40'>Be with Co-Development</h1>
          </div>
          <div className='w-5/12'>
            <svg
              viewBox='0 0 200 200'
              className='h-full max-w-xl mx-auto'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                fill='#f6ad55'
                d='M44,-37.8C56.4,-31.5,65.4,-15.8,67.1,1.7C68.7,19.1,63,38.2,50.6,53C38.2,67.8,19.1,78.4,4.8,73.6C-9.6,68.9,-19.2,48.8,-32,34C-44.9,19.2,-61.1,9.6,-66.3,-5.2C-71.5,-20,-65.7,-39.9,-52.8,-46.2C-39.9,-52.5,-20,-45,-2.1,-43C15.8,-40.9,31.5,-44.1,44,-37.8Z'
                transform='translate(100 100)'
              />
            </svg>
            <div className='relative'>
              <div className='ml-40 mb-32 absolute bottom-0'>
                <lottie-player
                  src='https://assets6.lottiefiles.com/packages/lf20_UUvrir.json'
                  background='transparent'
                  speed={1}
                  style={{ width: '250px', height: '250px' }}
                  loop
                  autoPlay
                />
              </div>
            </div>
          </div>
        </div>
        <div className='relative mt-20'>
          <div className='absolute inset-x-0 bottom-0 mb-10 max-w-lg mx-auto'>
            <img src={logowithlaptop} className='max-w-full' />
          </div>
          <svg xmlns='http://www.w3.org/2000/svg' className='w-full h-40'>
            <path
              fill='rgb(255, 255, 255)'
              d='M-240,32c150 -16 250 -16 400 0c150 16 250 16 400 0c150 -16 250 -16 400 0c150 16 250 16 400 0c150 -16 250 -16 400 0c150 16 250 16 400 0c150 -16 250 -16 400 0c150 16 250 16 400 0c150 -16 250 -16 400 0c150 16 250 16 400 0l0,150 l-4000,0Z'
            />
          </svg>
        </div>
      </div>
      {/* Next */}

      <div>
        <div className='m-6 mx-auto container flex justify-center'>
          <h1
            style={{ fontFamily: '"Ubuntu", sans-serif' }}
            className='text-5xl font-medium text-center border-b-4 border-orange-400 inline hover:border-gray-600'>
            Courses Available
          </h1>
        </div>
        <div className='flex'>
          <div className='w-1/2 relative'>
            <div className='relative'>
              <h1
                className='absolute ml-40 mt-20 font-bold text-6xl text-gray-800'
                style={{
                  fontFamily: '"Ubuntu", sans-serif',
                  fontSize: '10rem',
                }}>
                OOP
              </h1>
              <h1
                className='absolute pl-4 ml-32 mt-20 font-bold text-6xl text-blue-500'
                style={{
                  fontFamily: '"Ubuntu", sans-serif',
                  fontSize: '10rem',
                }}>
                OOP .
              </h1>
            </div>
            <svg
              viewBox='0 0 200 200'
              className='h-full max-w-xl mx-auto'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                fill='#2d3748'
                d='M63.4,-53C75.7,-35.1,74.9,-9.1,66.7,10.5C58.5,30.1,42.8,43.3,23.4,55.3C3.9,67.2,-19.4,77.9,-36.8,71.5C-54.2,65,-65.7,41.3,-70.1,17.4C-74.4,-6.5,-71.6,-30.7,-58.8,-48.8C-45.9,-66.8,-22.9,-78.7,1.3,-79.8C25.5,-80.8,51,-70.9,63.4,-53Z'
                transform='translate(100 100)'
              />
            </svg>
          </div>
          <div className='w-1/2 text-center -ml-40 '>
            <h1 className='mt-8 text-4xl '>In OOP ?</h1>
            <p className='text-gray-600 font-hairline italic'>
              [ Object Oriented Language ]
            </p>
            <div className='flex mt-6 leading-normal '>
              <div className='w-1/2'></div>
              <ul className='w-1/2 list-disc text-justify text-lg text-gray-700'>
                <li>Basics of the respective language.</li>
                <li>Data Structures.</li>
                <li>Algoritms.</li>
              </ul>
            </div>
            <div className='text-justify text-gray-600'>
              <h1 className='text-4xl font-semibold'>Course Outcome:</h1>
              <h2 className='text-2xl'>
                After completion of the course you can easily crack the
                interview coding problems and whiteboard problems with ease
              </h2>
            </div>
            <div className='p-8'>
              <h2 className='line-through text-3xl pl-24 text-red-500 -mb-6'>
                ₹5000
              </h2>
              <h2 className=' text-2xl '>
                <div className='text-5xl inline'>At Just</div> ₹3999
              </h2>
            </div>
            <div className='flex mr-40 justify-end'>
              <button className='text-2xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Next */}

      <div>
        <div className='m-6 mx-auto container flex justify-center'>
          <h1
            className='text-5xl font-medium text-center border-b-4 border-orange-400 inline hover:border-gray-600'
            style={{ fontFamily: '"Ubuntu", sans-serif' }}>
            Why Choose us?
          </h1>
        </div>
        <div className='flex'>
          <div className='w-1/2'>
            <div className='relative'>
              <img
                className='max-w-full absolute w-1/2 '
                src={board}
                style={{ top: 170, right: 200 }}
              />
            </div>
            <svg
              viewBox='0 0 200 200'
              className='h-full max-w-xl mx-auto'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                fill='#2d3748'
                d='M63.4,-53C75.7,-35.1,74.9,-9.1,66.7,10.5C58.5,30.1,42.8,43.3,23.4,55.3C3.9,67.2,-19.4,77.9,-36.8,71.5C-54.2,65,-65.7,41.3,-70.1,17.4C-74.4,-6.5,-71.6,-30.7,-58.8,-48.8C-45.9,-66.8,-22.9,-78.7,1.3,-79.8C25.5,-80.8,51,-70.9,63.4,-53Z'
                transform='translate(100 100)'
              />
            </svg>
          </div>
          <div className='w-1/2'>
            <ul className=' p-6 my-6 text-4xl list-decimal list-outside '>
              <li>Govt Certificate of Training.</li>

              <li>Placement assistance.</li>

              <li>Learn anytime, anywhere.</li>
              <li>Regular assignments.</li>
              <li>Hands-on practice.</li>
              <li>Doubt clearing session every day.</li>

              <li>No prior knowledge required.</li>
              <li>Solving various company-specific coding questions.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mentors */}

      <div>
        <div className='m-6 mx-auto container flex justify-center'>
          <h1
            className='text-5xl font-medium text-center border-b-4 border-orange-400 inline hover:border-gray-600'
            style={{ fontFamily: '"Ubuntu", sans-serif' }}>
            Mentors
          </h1>
        </div>
        <div className='flex'>
          <div className='w-1/2'>
            <div className='relative'>
              <img
                src={classroom}
                className='ml-10 absolute w-1/2 max-w-full'
              />
            </div>
            <svg
              viewBox='0 0 200 200'
              className='h-full max-w-xl mx-auto'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                fill='#2d3748'
                d='M63.4,-53C75.7,-35.1,74.9,-9.1,66.7,10.5C58.5,30.1,42.8,43.3,23.4,55.3C3.9,67.2,-19.4,77.9,-36.8,71.5C-54.2,65,-65.7,41.3,-70.1,17.4C-74.4,-6.5,-71.6,-30.7,-58.8,-48.8C-45.9,-66.8,-22.9,-78.7,1.3,-79.8C25.5,-80.8,51,-70.9,63.4,-53Z'
                transform='translate(100 100)'
              />
            </svg>
          </div>
          <div className='w-1/2 flex justify-between mt-10'>
            <div className='w-1/3 m-4'>
              <img
                src={bro}
                className='max-w-full rounded-full mx-auto border-blue-500 border-2 p-6 m-4'
              />
              <h2 className='text-2xl text-center'>Rohan</h2>
            </div>
            <div className='w-1/3 m-4'>
              <img
                src={bro}
                className='max-w-full rounded-full mx-auto border-blue-500 border-2 p-6 m-4'
              />
              <h2 className='text-2xl text-center'>M.Singh</h2>
            </div>
            <div className='w-1/3'></div>
          </div>
        </div>
      </div>
    </div>
  );
}
