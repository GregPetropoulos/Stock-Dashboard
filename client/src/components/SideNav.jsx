import React from 'react'

const SideNav = () => {
  return (
    <div className='w-full'>
            <div className='flex flex-col justify-center align-middle '>
        {/* <label htmlFor='my-drawer-1' className='drawer-overlay'></label> */}
        <ul className='menu border-r-2 h-full border-r-success p-4 overflow-y-auto w-32 bg-base-100 text-base-content'>
          {/* <!-- Sidebar content here --> */}
          <li className='m-4 text-center'>
            <a  href={'!#'} alt='wallet' className=''>Wallet</a>
          </li>
          <li className='m-4'>
            <a href={'!#'} alt='Trades' className=''>Trades</a>
          </li>
          <li className='m-4 text-center'>
            <a href={'!#'} alt='Message' className=''>Messages</a>
          </li>
          <li className='m-4'>
            <a href={'!#'} alt='Settings' className=''>Settings</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SideNav