import {useState} from 'react';
import Header from '../Header';
import SideNav from '../SideNav';
// import Drawer from '../Drawer';
const Home = () => {
  const[show,setShow]=useState(true)
  return (
    <div className='container  '>
      <Header/>
      {/* <div className={ show ? 'text-red-900' : 'text-green-900' }>TEST</div> */}
      <SideNav/>
      
    </div>
  );
};

export default Home;
