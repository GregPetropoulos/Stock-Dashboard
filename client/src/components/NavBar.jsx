import React from 'react';
import { BiBell } from 'react-icons/bi';
import { BiSearch } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navbar bg-base-100'>
      <div className='flex-1'>
        <Link to='/' className='btn btn-ghost normal-case text-xs xsm:text-base sm:text-xl'>
          Dashboard
        </Link>
      </div>
      <div className=" relative hidden sm:form-control">
      <input type="text" placeholder="Search" className=" xsm:p-3 xsm:input xsm:input-xs xsm:input-bordered xsm:input-success xsm:w-32 " />
      <BiSearch className=' xsm:absolute xsm:pointer-events-none xsm:left-24 xsm:top-1'/>
    </div>
      <div className='flex-none'>
        <label tabIndex={0} className='btn btn-ghost btn-circle'>
          <div className='indicator'>
            <BiBell size={'1.3rem'} style={{ transform: 'rotate(30deg)' }} />
            <span className='badge badge-xs badge-primary indicator-item'></span>
          </div>
        </label>
        <div className='dropdown dropdown-end'>
          <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
            <div className='w-10 rounded-full'>
              <img alt='people' src='https://placeimg.com/80/80/people' />
            </div>
          </label>
          <ul
            tabIndex={0}
            className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'>
            <li>
              <Link to='/profile' className='justify-between'>
                Profile
                <span className='badge'>New</span>
              </Link>
            </li>
            <li>
              <Link to='/'>Dashboard</Link>
            </li>
            <li>
              <Link to='/settings'>Settings</Link>
            </li>
            <li>
              <Link to='/logout'>Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
