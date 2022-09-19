import { useState, useEffect } from 'react';
import Chart from './charts/chart';
import LineChart from './charts/LineChart';

import { CgArrowsExchangeAlt } from 'react-icons/cg';
import { CgArrowsHAlt } from 'react-icons/cg';
import { CgArrowLongDown } from 'react-icons/cg';
import { CgArrowLongUp } from 'react-icons/cg';
import { FaEthereum } from 'react-icons/fa';
import { FaBitcoin } from 'react-icons/fa';
import { SiLitecoin } from 'react-icons/si';

const Card = ({ data }) => {
  return (
    <>
      <div 
      className='flex flex-wrap flex-row w-full justify-center sm:justify-around  m-2  gap-x-3 sm:flex-nowrap sm:mt-4'
      >
        {data.map((item, idx) => {
          console.log('item', item);

          //FORMAT METADATA OPEN AND CLOSE DIFFERENTIAL OF STOCK FOR CARD DYNAMIC UI
          const cryptoOpen = Object.values(
            item['Time Series Crypto (5min)']
          )[0]['1. open'];
          const cryptoClose = Object.values(
            item['Time Series Crypto (5min)']
          )[0]['4. close'];
          const numberChange = parseFloat(cryptoClose - cryptoOpen);
          const stockOpenCloseDiff =numberChange.toString().split('').slice(0, 5).join('') * 1;


          // FORMAT DATA FOR LINE CHART, TIME, HIGH AND LOW INTO NUMBERS FOR DYNAMIC LINE CHART--PASS PROPS
          const high =
            Object.values(item['Time Series Crypto (5min)'])[0]['2. high'] * 1;
          const low =
            Object.values(item['Time Series Crypto (5min)'])[0]['3. low'] * 1;

          const time1 = Object.keys(item['Time Series Crypto (5min)'])[0]
            .split('')
            .slice(10, 16)
            .join('');
          const time5 = Object.keys(item['Time Series Crypto (5min)'])[1]
            .split('')
            .slice(10, 16)
            .join('');
          console.log('time1 sliced ', time1);

          return (
            <div
              key={idx}
              className=' card my-3 max-w-fit justify-center align-middle items-center bg-gradient-to-b from-base-100  to-base-300 text-primary-content sm:w-full'>
              {/* ICONS */}
              <div
                className=''
                // className=' flex flex-row  justify-center bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 '
              >
                {item['Meta Data']['2. Digital Currency Code'] === 'ETH' ? (
                  <FaEthereum
                    size={'2rem'}
                    style={{
                      transform: 'rotate(20deg)',
                      color: 'rgb(60, 60, 61)',
                      backgroundColor: 'rgb(236, 240, 241)',
                      padding: '3px',
                      borderRadius: '50%',
                      margin: '4px'
                    }}
                  />
                ) : item['Meta Data']['2. Digital Currency Code'] === 'BTC' ? (
                  <FaBitcoin
                    size={'2rem'}
                    style={{
                      transform: 'rotate(20deg)',
                      color: 'rgb(77, 77, 77)',
                      backgroundColor: 'rgb(247, 147, 26)',
                      padding: '3px',
                      borderRadius: '50%',
                      margin: '4px'
                    }}
                  />
                ) : (
                  <SiLitecoin
                    size={'2rem'}
                    style={{
                      transform: 'rotate(20deg)',
                      color: 'rgb (255,255,255)',
                      backgroundColor: 'rgb(52,93,157)',
                      padding: '3px',
                      borderRadius: '50%',
                      margin: '4px'
                    }}
                  />
                )}
              </div>

              <div className='card-body 
               align-middle items-center justify-center p-6 xsm:w-1/2'>
                {/* META DATA */}
                <div className='flex flex-row justify-center text-center'>
                  <p className='text-[8px]'>
                    {item['Meta Data']['2. Digital Currency Code']}
                  </p>
                  <CgArrowsExchangeAlt />
                  <p className='text-[8px]'>
                    {item['Meta Data']['4. Market Code']}
                  </p>{' '}
                  {Math.sign(stockOpenCloseDiff) > 0 ? (
                    <CgArrowLongUp />
                  ) : stockOpenCloseDiff === 0 ? (
                    <CgArrowsHAlt />
                  ) : (
                    <CgArrowLongDown />
                  )}
                  <p className=' text-[8px]'>{stockOpenCloseDiff}</p>
                </div>
                <LineChart
                  cryptoClose={cryptoClose}
                  cryptoOpen={cryptoOpen}
                  time5={time5}
                  time1={time1}
                  high={high}
                  low={low}
                  item={item}
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Card;
