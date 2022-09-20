import React from 'react';

const Spinner = () => {
  return (
    <>
      <div className=' relative w-full h-full  '>
        <div
          className=' absolute top-1/3 left-1/2 bg-gradient-to-r from-primary to-secondary animate-spin ease-in-out radial-progress bg-primary text-primary-content border-4 border-primary'
          style={{
            '--value': '28',
            '--size': '12rem',
            '--thickness': '1rem'
          }}></div>
      </div>
    </>
  );
};

export default Spinner;
