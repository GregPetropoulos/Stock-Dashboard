import React from 'react';
import { BiSearch } from 'react-icons/bi';

const Header = () => {
  return (
    <div className='block text-center p-0 m-0 xsm:flex xsm:flex-row xsm:justify-center'>
      <div className=' xsm:flex xsm:flex-col xsm:align-middle xsm:w-full xsm:justify-start  '>
        <h1 className=' text-base font-bold  xsm:text-xl'>Dashboard</h1>
        <p className='text-xs sm:text-md'>10:00 Am * 30 May 2022</p>
      </div>

      <div className=' hidden sm:flex xsm:flex-col sm:w-full sm:align-middle sm:justify-center'>
        <div className='xsm:flex-row xsm:flex xsm:relative'>
          <input
            type='text'
            placeholder='Search here'
            className='  xsm:p-3 xsm:input xsm:input-xs xsm:input-bordered xsm:input-success xsm:w-32 xsm:mr-1'
          />
          <BiSearch className=' xsm:absolute xsm:pointer-events-none xsm:left-24 xsm:top-1'/>
        </div>
      </div>
    </div>
  );
};

export default Header;
