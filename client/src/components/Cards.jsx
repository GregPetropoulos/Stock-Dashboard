import { useState, useEffect } from 'react';
import Card from './Card';
import Chart from './charts/chart';
import { CgArrowsExchangeAlt } from 'react-icons/cg';

const Cards = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  console.log('data', data);

  useEffect(() => {
    if (true) {
      // fetchStocks()
      // setData(chartData);
    }
  }, [show]);

  //STOCK REQUEST/RESONSE
  const apiKey = process.env.REACT_APP_STOCK_API_KEY;
  
const ethUrl=`https://www.alphavantage.co/query?function=CRYPTO_INTRADAY&symbol=ETH&market=USD&interval=5min&apikey=${apiKey}`

const btcUrl=`https://www.alphavantage.co/query?function=CRYPTO_INTRADAY&symbol=BTC&market=USD&interval=5min&apikey=${apiKey}`
const ltcUrl=`https://www.alphavantage.co/query?function=CRYPTO_INTRADAY&symbol=LTC&market=USD&interval=5min&apikey=${apiKey}`



  const fetchStocks = async () => {
    //Transform requests into Promises, await all
    try {
      const response= await Promise.all([fetch(ethUrl),fetch(btcUrl),fetch(ltcUrl)])
      // console.log('looking for status codes', res);
      // const data = await res.json();
      console.log("response from fetch call",response);
      const data1= await response[0].json()
      const data2= await response[1].json()
      const data3= await response[2].json()
      console.log("data responses from an array",data1,data2,data3)

      setData([data1,data2,data3]);
    } catch (err) {
      console.error(err);
      console.log("logged error",err);

      // console.log("error status code check",err.res.status)
      //add toast here
    }
  };

  return (
    <>
      <div className='flex flex-row justify-evenly mx-2'>
        <div className='card w-full bg-primary text-primary-content'>
          <div className='card-body text-center'>
            <h2 className='card-title'>ETH</h2>
            <div className='flex flex-row w-full text-center'>

            <p className='text-xs'>ETH</p>
            <CgArrowsExchangeAlt />
            <p className='text-xs'>USD</p> <p className='text-xs'>5.3%</p>
            </div>
            {/* <Chart /> */}
          </div>
        </div>
        {/* <Card/>
    <Card/>
    <Card/> */}
      </div>
      {/* {show ? (
        <span>
          <h2>Available Charts</h2>
          {show &&
            ethData.length > 0 &&
            ethData.map((chartInfo, idx) => (
              // !Stopped here map through met data
              // <Card chartInfo={chartInfo} key={idx}>
              // !Stopped here map through timeintervales
              // <Chart/>
              // </Card>
              <h1>CHART HERE</h1>
            ))}
        </span>
      ) : (
        <h2>No Charts Available</h2>
      )}
      <button className='btn btn-primary' onClick={() => setShow(!show)}>
        {show ? 'Hide Data' : 'Fetch Data'}
      </button> */}
    </>
  );
};
export default Cards;
