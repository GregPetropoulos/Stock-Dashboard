import { useState, useEffect } from 'react';
import Card from './Card';
// import Chart from './charts/chart';
const Cards = () => {
  const [show, setShow] = useState(false);
  const [ethData, setEthData] = useState([]);
  console.log('data', ethData);

  // useEffect(() => {
  //   if (true) {
  //     // fetchStocks()
  //     // setData(chartData);
  //   }
  // }, [show]);

  //STOCK REQUEST/RESONSE
  const apiKey = process.env.REACT_APP_STOCK_API_KEY;
  const urlBuilder = `https://www.alphavantage.co/query?function=CRYPTO_INTRADAY&symbol=ETH&market=USD&interval=5min&apikey=${apiKey}`;

  const fetchStocks = async () => {
    try {
      const res = await fetch(urlBuilder);
      console.log('looking for status codes', res);
      const data = await res.json();
      console.log(data);
      setEthData([...data]);
    } catch (err) {
      console.error(err);
      // console.log("error status code check",err.res.status)
      //add toast here
    }
  };
  return (
    <>
    <div className='flex flex-row justify-around'>

    <Card/>
    <Card/>
    <Card/>
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
