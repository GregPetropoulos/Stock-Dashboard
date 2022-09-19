import React from 'react';

const BigCard = () => {
  return (
    <div 
    className='flex flex-col w-full  justify-evenly m-2  gap-x-3'
    >
      <div className='flex flex-row w-2/3 justify-center align-middle'>
        {/* Biggest card in  */}
        <div className='card w-full'>
          <div className='card-body'>
            <div className='card-title'>Market Overview</div>
            Put a chart here
          </div>
        </div>
      </div>

      <div className='flex flex-col xsm:flex-row flex-wrap xsm:w-1/3 gap-y-3 '>
        <div className=' card w-full'>
          <div className='card-body'>
            <div className='title'>Profit</div>
          </div>
        </div>
        <div className='card w-full'>
          <div className='card-body'>
            <div className='title'>Quick Transfer</div>
            <div className='card-actions justify-end'>
              <button className='btn'>Transfer Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigCard;
