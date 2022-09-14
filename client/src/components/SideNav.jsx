import React from 'react';
import { BiMessageSquareAdd } from 'react-icons/bi';
import { BiPurchaseTag } from 'react-icons/bi';
import { BiWallet } from 'react-icons/bi';
import { AiOutlineSetting } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';

const SideNav = () => {
  return (
    <>
      <ul className='flex flex-col justify-around align-middle  h-full border-r-success border-r-2 '>
        {/* <!-- Sidebar content here --> */}
        <li className=' p-2 text-xs  sm:hidden'>
          <a href={'!#'} alt='search' className=''>
            <BiSearch className='inline-block mr-2' />{' '}
            <p className='hidden xsm:inline-block'>Search</p>
          </a>
        </li>
        <li className=' p-2 text-xs'>
          <a href={'!#'} alt='wallet' className=''>
            <BiWallet className='inline  mr-2' />
            <p className='hidden xsm:inline-block'>Wallet</p>
          </a>
        </li>
        <li className=' p-2 text-xs'>
          <a href={'!#'} alt='Trades' className=''>
            <BiPurchaseTag className='inline mr-2' />
            <p className='hidden xsm:inline-block'>Trades</p>
          </a>
        </li>
        <li className=' p-2 text-xs'>
          <a href={'!#'} alt='Message' className='flex'>
            <BiMessageSquareAdd className='inline mr-2' />
            <p className='hidden xsm:inline-block'>Messages</p>
          </a>
        </li>
        <li className='p-2 text-xs '>
          <a href={'!#'} alt='Settings' className='flex'>
            <AiOutlineSetting className='inline mr-2' />
            <p className='hidden xsm:inline-block'>Settings</p>
          </a>
        </li>
      </ul>
    </>
  );
};

export default SideNav;
