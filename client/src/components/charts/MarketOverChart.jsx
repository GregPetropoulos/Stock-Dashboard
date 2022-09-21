import React from 'react';
import Chart from 'react-google-charts';
const MarketOverChart = ({ data }) => {
  const chartEvents = [
    {
      eventName: 'select',
      callback({ chartWrapper }) {
        console.log('Selected ', chartWrapper.getChart().getSelection());
      }
    }
  ];

  const dataArr = [
    ['Time', 'ETH', 'BTC', 'LTE'],
    [1, 12, 13, 14],
    [2, 5.5, 6.7, 7],
    // [3, 14],
    // [4, 5],
    // [5, 3.5],
    [6, 19, 18, 17]
  ];

  const options = {
    colors: ['rgb(236, 240, 241)', 'rgb(247, 147, 26)', 'rgb(52,93,157)'],
    curveType: 'function',

    backgroundColor: '',
    color: '#9575cd',
    width: '100%',
    hAxis: {
      gridlines: {
        interval: 0
      },
      title: 'Time (5 min)',
      titleTextStyle: {
        color: 'grey',
        fontName: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont',
        fontSize: 18
      },
      viewWindow: { min: 0, max: 6 }
    },
    vAxis: {
      gridlines: {
        interval: 0
      },
      title: 'Crypto Stock',
      titleTextStyle: {
        color: 'grey',
        fontName: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont',
        fontSize: 18
      },
      viewWindow: { min: 0, max: 19 }
    },
    legend: 'none'
  };

  return (
    <div>
      <Chart
        chartType='LineChart'
        data={dataArr}
        style={{ fill: '#FFC0CB' }}
        options={options}
        graphID='LineChart'
        chartEvents={chartEvents}
      />
    </div>
  );
};

export default MarketOverChart;
