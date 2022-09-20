import { useState } from 'react';
import SideNav from '../SideNav';
import Cards from '../Cards';
import AsideCard from '../AsideCard';

// Layout is made of 3 columns left to right

const Home = () => {
  const [show, setShow] = useState(true);

  return (
    <div className='container'>
      <div className=' flex justify-center align-middle flex-row w-screen h-full '>
        <div className='flex flex-col w-1/5 '>
          <SideNav />
        </div>

        <div className='flex flex-wrap flex-row w-full  h-full sm:flex-nowrap '>
          <div className=' flex flex-col w-full '>
            <Cards />
          </div>
          <div className=' flex flex-col  w-full sm:w-1/5'>
            <AsideCard />
          </div>
        </div>
      </div>

      {/* // <div className={ show ? 'text-red-900' : 'text-green-900' }>TEST</div> */}
    </div>
  );
};

export default Home;
