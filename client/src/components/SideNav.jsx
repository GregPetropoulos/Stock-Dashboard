import React from 'react';
import { BiMessageSquareAdd } from 'react-icons/bi';
import { BiPurchaseTag } from 'react-icons/bi';
import { BiWallet } from 'react-icons/bi';
import { AiOutlineSetting } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';

const SideNav = () => {
  return (
    <div className='block mt-3 text-center xsm:flex xsm:flex-col xsm:w-full xsm:justify-center xsm:align-middle xsm:h-screen '>
      {/* <label htmlFor='my-drawer-1' className='drawer-overlay'></label> */}
      <ul className=' menu xsm:justify-evenly xsm:border-r-2 xsm:h-full xsm:border-r-success xsm:p-1 xsm:overflow-y-auto xsm:w-36 bg-base-100 text-base-content'>
        {/* <!-- Sidebar content here --> */}
        <li className='  mx-4  text-sm sm:hidden'>
          <a href={'!#'} alt='search' className='flex justify-center'>
            <BiSearch className='mr-2 mt-1' />
            Search
          </a>
        </li>
        <li className='mx-4 text-sm'>
          <a
            href={'!#'}
            alt='wallet'
            className='flex justify-center'>
            <BiWallet className='mr-2 mt-1' />
            <p className=''>Wallet</p>
          </a>
        </li>
        <li className='mx-4  text-sm'>
          <a href={'!#'} alt='Trades' className='flex justify-center'>
            <BiPurchaseTag className='mr-2 mt-1' />
            Trades
          </a>
        </li>
        <li className='mx-4  text-sm'>
          <a href={'!#'} alt='Message' className='flex justify-center'>
            <BiMessageSquareAdd className='mr-2 mt-1' />
            Messages
          </a>
        </li>
        <li className='mx-4  text-sm'>
          <a href={'!#'} alt='Settings' className='flex justify-center'>
            <AiOutlineSetting className='mr-2 mt-1' />
            Settings
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
