import { useState } from 'react';
import SideNav from '../SideNav';
import Cards from '../Cards';
import AsideCard from '../AsideCard';

const Home = () => {
  const [show, setShow] = useState(true);

  return (
    <div className='container mx-0 '>
      <div className=' flex flex-row w-screen h-screen '>


        <div 
        className='flex flex-col  h-full'>
          <SideNav />
        </div>

        <div className='flex flex-wrap sm:flex-nowrap flex-row w-full'>
          {/* WORKING OUT MOBILE RESPONSIVE HERE */}
{/* STOPPEDHERE */}
          <div className=' flex flex-col w-full '>
            <Cards />
          </div>
          <div className=' flex flex-col xsm:w-1/2 w-full '>
            <AsideCard />
          </div>
        </div>
      </div>

      {/* // <div className={ show ? 'text-red-900' : 'text-green-900' }>TEST</div> */}
    </div>
  );
};

export default Home;
