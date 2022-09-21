import { useEffect,useState } from 'react';

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
import Spinner from './components/Spinner';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const App = () => {
  // const[check,setCheck]=useState('check state rerender')
  // console.log(check)

  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log('data', data);
  console.log('loading check', loading);
  
  const fiveMinInMilliseconds=3000000
  const tenSeconds=10000

  useEffect(() => {
     // Calling the fetch every 5minutes
    
    //  const interval= setInterval(fetchStocks,tenSeconds)
     if(Array.isArray&&data.length===0){
console.log('useEffect sees empty data array and will fetch stocks')
// fetchStocks()
     }
     
    //  setLoading(false)
    // return ()=> clearInterval(interval);
    return ()=> console.log('cleanup')
  }, []);

  //STOCK REQUEST/RESPONSE
  const apiKey = process.env.REACT_APP_STOCK_API_KEY;

  const ethUrl = `https://www.alphavantage.co/query?function=CRYPTO_INTRADAY&symbol=ETH&market=USD&interval=5min&apikey=${apiKey}`;

  const btcUrl = `https://www.alphavantage.co/query?function=CRYPTO_INTRADAY&symbol=BTC&market=USD&interval=5min&apikey=${apiKey}`;
  const ltcUrl = `https://www.alphavantage.co/query?function=CRYPTO_INTRADAY&symbol=LTC&market=USD&interval=5min&apikey=${apiKey}`;

  const fetchStocks = async () => {
    //Transform requests into Promises, await all
    setLoading(true)
    try {
      const response = await Promise.all([
        fetch(ethUrl),
        fetch(btcUrl),
        fetch(ltcUrl)
      ]);
      // console.log('looking for status codes', res);
      console.log('response from fetch call', response);
      const data1 = await response[0].json();
      const data2 = await response[1].json();
      const data3 = await response[2].json();
      console.log('data responses from an array', data1, data2, data3);
      //Clean object keys into camel case
      setData([data1, data2, data3]);
      setLoading(false)
    } catch (err) {
      setLoading(true)
      console.error(err);
      console.log('logged error', err);

      // console.log("error status code check",err.res.status)
      //add toast here
    }
    setLoading(false)
  };


  if (loading) return <Spinner />;
  return (
    <>
      <Router>
        {/* If not logged in don't show this navbar */}
        <NavBar/>

        <Routes>
          <Route path='/landing' element={<Landing />} />
          {/* This '/' will be private*/}
          <Route path='/' element={<Home data={data}/>} />
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
