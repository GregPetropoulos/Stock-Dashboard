import { useState } from 'react';
import Header from '../Header';
import SideNav from '../SideNav';
// import Cards from '../Cards';
// import Drawer from '../Drawer';

const Home = () => {
  const [show, setShow] = useState(true);

  return (
    <div className='container mx-0 '>
      <div className='flex flex-row w-screen h-screen '>
        {/* The parent row will house 3 columns-sidenav and header,cards,chart and sidenav2 */}

        {/* 1ST COL width 1/6*/}
        <div className='flex flex-col'>
          <SideNav />
        </div>

        <div className='flex flex-col w-full '>2nd col</div>
        <div className='flex flex-col w-1/2'>3rd col</div>

        {/* 2ND COL */}
        {/* <div className=' xsm:flex xsm:flex-col xsm:w-3/6 xsm:ml-3'> */}
        {/* <Header /> */}
        {/* <div className='flex flex-row justify-between align-middle'>
            <h1>TEST</h1>
            <h1>TEST</h1>
            <h1>TEST</h1>
            <h1>TEST</h1>
          </div> */}
        {/* <Cards/> */}
        {/* <div className='flex flex-row w-100 h-full'>BIG CARD HERE</div> */}

        {/* </div> */}
        {/* 3RD COL */}
        {/* <div className='xsm:flex xsm:flex-col  xsm:w-2/6 xsm:h-full'>
          RIGHT SIDE COLUMN
        </div> */}
      </div>
      {/* // <div className={ show ? 'text-red-900' : 'text-green-900' }>TEST</div> */}
    </div>
  );
};

export default Home;
