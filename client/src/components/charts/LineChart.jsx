// S SNAPSHOT LINECHART FOR ONE OF THE THREE CARDS LTE,ETH,BTC

import { Chart } from 'react-google-charts';

const LineChart = ({
  item,
  cryptoClose,
  cryptoOpen,
  time1,
  time5,
  high,
  low
}) => {
  console.log('time1', time1);
  console.log('cryptoClose', cryptoClose);
  console.log('cryptoOpen', cryptoOpen);
  console.log('high', high);
  console.log('low', low);

  const lineChartData = [
    ['Time', 'Stock'],
    [time1, cryptoOpen * 1],
    // [time1, low],
    // [time1, high],
    [time5, cryptoClose * 1]
  ];
  console.log('lineChartData', lineChartData);

  const options = {
    legend: 'none',
    colors: ['#00bfff'],
    width: '100%',
    height: '100%',
    lineWidth: 3,
    curveType: 'function',
    backgroundColor:'',
    hAxis: { title: 'Time', viewWindow: { min: time1, max: time5 } },
    vAxis: {
      gridlines: {
        interval: 0
      },
      title: 'Stock',
      viewWindow: { min: cryptoOpen, max: cryptoClose}
    }
  };

  return (
    <>
      <Chart
        chartType='LineChart'
        data={lineChartData}
        options={options}
      />
    </>
  );
};

export default LineChart;
