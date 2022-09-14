import React from 'react';

const Header = () => {
  return (
    <div className='block m-3  xsm:flex xsm:flex-row xsm:justify-center'>
      <div className='flex flex-col align-middle w-full justify-start '>
        <h1 className=' text-base font-bold xsm:text-xl'>Dashboard</h1>
        <p>10:00 Am * 30 May 2022</p>
      </div>

      <div className='flex flex-col w-full align-middle justify-center'>
        <input
          type='text'
          placeholder='Search here'
          className=' input input-xs input-bordered input-success w-32'
        />
      </div>
    </div>
  );
};

export default Header;
