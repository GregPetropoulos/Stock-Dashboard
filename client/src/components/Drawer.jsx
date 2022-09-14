import React from 'react';
import Cards from './Cards';
const Drawer = () => {
  return (
    <div className='drawer drawer-mobile'>
      <input id='my-drawer-1' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content flex flex-col items-center justify-center'>
        <label
          htmlFor='my-drawer-1'
          className='btn btn-xs btn-primary drawer-button lg:hidden'>
          Open Menu
        </label>
{/* page content */}
<div className='flex flex-row w-full'>

        <div className='flex-row w-full justify-start '>
          {/* <div className='flex-col'> */}
            <h1>Dashboard</h1>
            <p>10:00 Am * 30 May 2022</p>
          {/* </div> */}
        </div>
        <div className='flex flex-row w-full justify-end'>
        <input
          type='text'
          placeholder='Search here'
          className='input input-xs input-bordered input-success max-w-xs'
        />
        </div>
        </div>

        <div className='flex-row w-full'>
          <Cards />
        </div>

        <div>Fatcol</div>
        <div>1/3col</div>
      </div>

      <div className='drawer-side'>
        <label htmlFor='my-drawer-1' className='drawer-overlay'></label>
        <ul className='menu p-4 overflow-y-auto w-40 bg-base-100 text-base-content'>
          {/* <!-- Sidebar content here --> */}
          <li>
            <a>Wallet</a>
          </li>
          <li>
            <a>Trades</a>
          </li>
          <li>
            <a>Messages</a>
          </li>
          <li>
            <a>Settings</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
