import { useState, useEffect } from 'react';
import Card from './Card';
import BigCard from './BigCard'
import Spinner from './Spinner';

const Cards = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log('data', data);

  useEffect(() => {
    // fetchStocks()
    if (true) {
      // setData(chartData);
    }
  }, [show]);

  //STOCK REQUEST/RESONSE
  const apiKey = process.env.REACT_APP_STOCK_API_KEY;

  const ethUrl = `https://www.alphavantage.co/query?function=CRYPTO_INTRADAY&symbol=ETH&market=USD&interval=5min&apikey=${apiKey}`;

  const btcUrl = `https://www.alphavantage.co/query?function=CRYPTO_INTRADAY&symbol=BTC&market=USD&interval=5min&apikey=${apiKey}`;
  const ltcUrl = `https://www.alphavantage.co/query?function=CRYPTO_INTRADAY&symbol=LTC&market=USD&interval=5min&apikey=${apiKey}`;

  const fetchStocks = async () => {
    //Transform requests into Promises, await all
    // setLoading(true)
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
      // setLoading(false)
    } catch (err) {
      // setLoading(true)
      console.error(err);
      console.log('logged error', err);

      // console.log("error status code check",err.res.status)
      //add toast here
    }
    // setLoading(false)
  };
  if (loading) return <Spinner />;

  return (
    <>
    <Card data={data}/>

    <BigCard data={data}/>

     </>
  );
};
export default Cards;
