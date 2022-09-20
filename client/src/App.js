// import { useEffect } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import About from './components/pages/About';
import NavBar from './components/NavBar';
import Settings from './components/pages/Settings';
import Landing from './components/pages/Landing';
import MarketOverview from './components/pages/MarketOverview';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const App = () => {
  return (
    <>
      <Router>
        {/* If not logged in don't show this navbar */}
        <NavBar/>

        <Routes>
          <Route path='/landing' element={<Landing />} />
          {/* This '/' will be private*/}
          <Route path='/' element={<Home />} />
          {/* This '/' will be private*/}
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/logout' element={<Login />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/market-overview' element={<MarketOverview />} />
          <Route path='/about' element={<About />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </Router>
      <ToastContainer/>
    </>
  );
};
export default App;
