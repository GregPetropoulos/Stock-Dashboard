import { useState } from 'react';
import SideNav from '../SideNav';
import Cards from '../Cards';


const Home = () => {
  const [show, setShow] = useState(true);

  return (
    <div className='container mx-0 '>
      <div className='flex flex-row w-screen h-screen '>
        <div className='flex flex-col'>
          <SideNav />
        </div>
        <div className='flex flex-col w-full '>2nd col
        <Cards/>
        </div>
        <div className='flex flex-col w-1/2'>3rd col</div>
      </div>
      {/* // <div className={ show ? 'text-red-900' : 'text-green-900' }>TEST</div> */}
    </div>
  );
};

export default Home;
