import React from 'react';
import { Link } from 'react-router-dom';

const BigCard = () => {
  return (
    <div
    className='flex flex-col  sm:flex-row w-full align-middle items-center justify-center m-2  gap-x-3'
    //  className='flex flex-col  sm:flex-row w-full align-middle items-center justify-center m-2  gap-x-3 border-4 border-yellow-500/100'
     >
      <div className='flex w-full items-center my-3 flex-col'>
      <Link
        to='/market-overview'
        className='btn btn-primary text-[8px] xsm:w-1/2 btn-xs hover:scale-125 hover:ease-in-out duration-1000 sm:hidden'>
        Market Overview
      </Link>

      </div>
      {/* Hide button at 640px >  */}
      <div 
           className='hidden sm:flex sm:flex-col sm:w-full'
      // className='hidden sm:flex sm:flex-col sm:w-full border-4 border-indigo-500/100'
      >
        {/* Biggest card in  */}
        <div className='card w-full '>
          <div className='card-body'>
            <div className='card-title'>Market Overview</div>
            Put a chart here
          </div>
        </div>
      </div>
{/* 2 cards on the right side of the big card */}
      <div 
        className='flex w-full flex-col xsm:flex-row flex-wrap sm:w-1/3 gap-y-3 '

      // className='flex w-full flex-col xsm:flex-row flex-wrap sm:w-1/3 gap-y-3 border-4 border-indigo-500/100'
      >
   
        <div className=' card w-full'>
          <div className='card-body'>
            <div className='title'>Profit</div>
          </div>
        </div>
        <div className='card w-full'>
          <div className='card-body'>
            <div className='title'>Quick Transfer</div>
            <div className='card-actions justify-end'>
              <button className='btn btn-xs'>Transfer Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigCard;
