// S SNAPSHOT LINECHART FOR ONE OF THE THREE CARDS LTE,ETH,BTC

import { Chart } from 'react-google-charts';

const LineChart = ({ item, cryptoClose, cryptoOpen, time1, time5, high, low }) => {
  console.log('time1', time1);
  console.log('cryptoClose', cryptoClose);
  console.log('cryptoOpen', cryptoOpen);
  console.log('high', high);
  console.log('low', low);

  const lineChartData = [
    ['Time', 'Stock'],
    [time1, cryptoOpen*1],
    [time1, low],
    [time1, high],
     [time5, cryptoClose*1]
  ];
  console.log('lineChartData', lineChartData);

  const options = {
    legend: 'none',
    colors:[	'#00bfff'],
    lineWidth: 3,
    curveType: 'function',
    // backgroundColor: 'black',
    backgroundColor: 'black',
  vAxis: {
    gridlines: {
      interval: 0
    }      
  }
  };

  return (
    <>
      <Chart
        chartType='LineChart'
        width='50px'
        height='50px'
        style={{}}
        data={lineChartData}
        options={options}
      />
    </>
  );
};

export default LineChart;
