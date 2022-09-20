import React from 'react';
import {CgProfile} from 'react-icons/cg';
import {MdLock} from 'react-icons/md'

const UpgradeNowCard = () => {
  return (
    <div className='card align-middle items-center'>
      <div className='card-body align-middle items-center'>
         <MdLock/>
          <CgProfile />

        <p className='text-sm'>Be more secure with Pro features</p>
      </div>
      <button
        className='btn bt-xs xsm:btn-sm'
        onClick={() => console.log('UPGRADED')}>Upgrade Now!</button>
    </div>
  );
};

export default UpgradeNowCard;
